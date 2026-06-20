import type { LoadingProps } from './Loading.types';
import { classNames } from '../../utils/classNames';
import styles from './Loading.module.css';

export function Loading({
  variant = 'spinner',
  size = 'md',
  label = 'Carregando',
  className,
  ...props
}: LoadingProps) {
  return (
    <div
      className={classNames(styles.root, styles[`root--${variant}`], className)}
      role="status"
      aria-live="polite"
      aria-busy="true"
      {...props}
    >
      <span
        className={classNames(styles.spinner, styles[`spinner--${size}`])}
        aria-hidden="true"
      />
      {variant !== 'spinner' ? (
        <span className={variant === 'page' ? styles.pageLabel : styles.label}>{label}</span>
      ) : (
        <span className="sr-only">{label}</span>
      )}
    </div>
  );
}
