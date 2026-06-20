import type { HTMLAttributes } from 'react';
import type { LoadingVariant, Size } from '../../types';

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  variant?: LoadingVariant;
  size?: Extract<Size, 'sm' | 'md' | 'lg'>;
  label?: string;
}
