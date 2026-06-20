import { createPortal } from 'react-dom';
import { useEffect, useId, useRef } from 'react';
import type { ModalProps } from './Modal.types';
import { classNames } from '../../utils/classNames';
import { getFocusableElements } from '../../utils/focusable';
import styles from './Modal.module.css';

export function Modal({
  open,
  title,
  children,
  footer,
  size = 'md',
  onOpenChange,
  closeLabel = 'Fechar modal',
  closeOnEscape = true,
  closeOnOverlayClick = false,
  className,
  ...props
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const previousOverflow = useRef<string>('');
  const titleId = useId();

  useEffect(() => {
    if (!open || typeof document === 'undefined') {
      return;
    }

    previousActiveElement.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusInitialElement = () => {
      const focusableElements = getFocusableElements(dialogRef.current);
      (focusableElements[0] ?? closeButtonRef.current ?? dialogRef.current)?.focus();
    };

    focusInitialElement();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        event.preventDefault();
        onOpenChange?.(false);
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusableElements = getFocusableElements(dialogRef.current);
      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (activeElement === first || !dialogRef.current?.contains(activeElement)) {
          event.preventDefault();
          last?.focus();
        }
      } else if (activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      if (dialogRef.current && event.target instanceof Node && !dialogRef.current.contains(event.target)) {
        focusInitialElement();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.body.style.overflow = previousOverflow.current;
      previousActiveElement.current?.focus?.();
    };
  }, [closeOnEscape, onOpenChange, open]);

  if (!open || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
          onOpenChange?.(false);
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={classNames(styles.dialog, styles[`dialog--${size}`], className)}
        {...props}
      >
        <header className={styles.header}>
          <div id={titleId} className={styles.title}>
            {title}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            aria-label={closeLabel}
            onClick={() => onOpenChange?.(false)}
          >
            ×
          </button>
        </header>
        <div className={styles.body}>{children}</div>
        {footer ? <footer className={styles.footer}>{footer}</footer> : null}
      </div>
    </div>,
    document.body,
  );
}
