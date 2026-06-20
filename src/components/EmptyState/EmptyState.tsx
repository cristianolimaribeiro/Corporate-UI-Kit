import type { EmptyStateProps } from './EmptyState.types';
import { classNames } from '../../utils/classNames';
import styles from './EmptyState.module.css';

export function EmptyState({ title, description, icon, action, className, ...props }: EmptyStateProps) {
  return (
    <section className={classNames(styles.root, className)} role="status" {...props}>
      {icon ? (
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
      ) : null}
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {action ? <div>{action}</div> : null}
    </section>
  );
}
