import type { HTMLAttributes, ReactNode } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  variant?: AlertVariant;
  title?: ReactNode;
  description: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
  closeLabel?: string;
}
