import type { HTMLAttributes, ReactNode } from 'react';
import type { Size } from '../../types';

export type CardPadding = Extract<Size, 'sm' | 'md' | 'lg'>;

export interface CardProps extends HTMLAttributes<HTMLElement> {
  header?: ReactNode;
  footer?: ReactNode;
  clickable?: boolean;
  onClick?: () => void;
  padding?: CardPadding;
}
