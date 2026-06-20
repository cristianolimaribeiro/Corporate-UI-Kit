import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { Size } from '../../types';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

export type ButtonSize = Extract<Size, 'sm' | 'md' | 'lg'>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  fullWidth?: boolean;
}
