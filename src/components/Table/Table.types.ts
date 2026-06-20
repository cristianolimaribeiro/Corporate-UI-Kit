import type { HTMLAttributes, Key, ReactNode } from 'react';
import type { Alignment } from '../../types';

export type TableSortDirection = 'asc' | 'desc';

export interface TableSortState {
  key: string;
  direction: TableSortDirection;
}

export interface TableColumn<T> {
  key: string;
  header: ReactNode;
  sortLabel?: string;
  accessor?: keyof T;
  render?: (row: T, index: number) => ReactNode;
  align?: Alignment;
  sortable?: boolean;
}

export interface TableProps<T> extends HTMLAttributes<HTMLDivElement> {
  columns: TableColumn<T>[];
  data: T[];
  getRowKey: (row: T, index: number) => Key;
  caption: string;
  loading?: boolean;
  emptyState?: ReactNode;
  sortState?: TableSortState | null;
  onSortChange?: (state: TableSortState | null) => void;
  onRowClick?: (row: T, index: number) => void;
  rowAriaLabel?: (row: T, index: number) => string;
}
