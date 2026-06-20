import type { AlertProps } from './Alert.types';
import { classNames } from '../../utils/classNames';
import styles from './Alert.module.css';

const variantRole: Record<NonNullable<AlertProps['variant']>, 'status' | 'alert'> = {
  info: 'status',
  success: 'status',
  warning: 'status',
  error: 'alert',
};

export function Alert({
  variant = 'info',
  title,
  description,
  icon,
  onClose,
  closeLabel = 'Fechar alerta',
  className,
  ...props
}: AlertProps) {
  const role = variantRole[variant];

  return (
    <section
      className={classNames(styles.alert, styles[`alert--${variant}`], className)}
      role={role}
      aria-live={role === 'alert' ? 'assertive' : 'polite'}
      {...props}
    >
      {icon ? (
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
      ) : null}
      <div className={styles.content}>
        {title ? <div className={styles.title}>{title}</div> : null}
        <div className={styles.description}>{description}</div>
      </div>
      {onClose ? (
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label={closeLabel}>
          ×
        </button>
      ) : null}
    </section>
  );
}
