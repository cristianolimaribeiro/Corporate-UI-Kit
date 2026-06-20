import type { HTMLAttributes } from 'react';

export interface PaginationState {
  page: number;
  totalPages: number;
}

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  firstLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  lastLabel?: string;
}
