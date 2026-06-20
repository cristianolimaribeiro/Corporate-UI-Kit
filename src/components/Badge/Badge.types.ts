import type { HTMLAttributes, ReactNode } from 'react';
import type { Size } from '../../types';

export type BadgeVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export type BadgeSize = Extract<Size, 'sm' | 'md' | 'lg'>;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  pill?: boolean;
  icon?: ReactNode;
}
