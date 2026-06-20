import type { TableSortState } from '../index';

export type RequestStatus = 'Open' | 'Pending' | 'Approved' | 'Rejected';

export interface DashboardRequest {
  id: string;
  requester: string;
  department: string;
  amount: number;
  submittedAt: string;
  status: RequestStatus;
  urgent: boolean;
  summary: string;
}

export interface DemoFilters {
  query: string;
  status: RequestStatus | 'all';
  urgentOnly: boolean;
}

export interface DemoState {
  filters: DemoFilters;
  page: number;
  pageSize: number;
  sortState: TableSortState | null;
  selectedRequestId: string | null;
  loading: boolean;
}
