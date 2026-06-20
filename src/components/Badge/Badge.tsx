import type { BadgeProps } from './Badge.types';
import { classNames } from '../../utils/classNames';
import styles from './Badge.module.css';

export function Badge({
  children,
  className,
  variant = 'neutral',
  size = 'md',
  pill = false,
  icon,
  ...props
}: BadgeProps) {
  return (
    <span
      className={classNames(
        styles.badge,
        styles[`badge--${variant}`],
        styles[`badge--${size}`],
        pill && styles['badge--pill'],
        className,
      )}
      {...props}
    >
      {icon ? <span className={styles.icon} aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
    </span>
  );
}
