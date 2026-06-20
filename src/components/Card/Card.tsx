import { forwardRef, type KeyboardEventHandler } from 'react';
import type { CardProps } from './Card.types';
import { classNames } from '../../utils/classNames';
import styles from './Card.module.css';

export const Card = forwardRef<HTMLElement, CardProps>(function Card(
  {
    header,
    footer,
    clickable = false,
    onClick,
    padding = 'md',
    className,
    children,
    onKeyDown,
    ...props
  },
  ref,
) {
  const handleKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
    onKeyDown?.(event);

    if (!clickable || event.defaultPrevented) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <article
      ref={ref}
      className={classNames(styles.card, styles[`card--${padding}`], clickable && styles['card--clickable'], className)}
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      onClick={clickable ? onClick : undefined}
      onKeyDown={clickable ? handleKeyDown : onKeyDown}
      {...props}
    >
      {header ? <div className={styles.header}>{header}</div> : null}
      <div className={styles.body}>{children}</div>
      {footer ? <div className={styles.footer}>{footer}</div> : null}
    </article>
  );
});
