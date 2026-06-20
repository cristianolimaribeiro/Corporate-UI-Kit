import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';
import { classNames } from '../../utils/classNames';
import styles from './Button.module.css';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    iconBefore,
    iconAfter,
    fullWidth = false,
    type = 'button',
    disabled,
    onClick,
    ...props
  },
  ref,
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      className={classNames(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        fullWidth && styles['button--fullWidth'],
        className,
      )}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={(event) => {
        if (isDisabled) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }}
      {...props}
    >
      {loading ? (
        <span className={classNames(styles.spinner, styles.icon)} aria-hidden="true" />
      ) : iconBefore ? (
        <span className={classNames(styles.icon, styles[`icon--${size}`])} aria-hidden="true">
          {iconBefore}
        </span>
      ) : null}
      <span>{children}</span>
      {iconAfter ? (
        <span className={classNames(styles.icon, styles[`icon--${size}`])} aria-hidden="true">
          {iconAfter}
        </span>
      ) : null}
    </button>
  );
});
