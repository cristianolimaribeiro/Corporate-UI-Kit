import type { DashboardRequest, DemoFilters } from './demoTypes';
import type { TableSortState } from '../index';

export function applyDemoFilters(requests: DashboardRequest[], filters: DemoFilters) {
  const normalizedQuery = filters.query.trim().toLowerCase();

  return requests.filter((request) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [request.id, request.requester, request.department, request.summary]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery);

    const matchesStatus = filters.status === 'all' || request.status === filters.status;
    const matchesUrgent = !filters.urgentOnly || request.urgent;

    return matchesQuery && matchesStatus && matchesUrgent;
  });
}

function compareStrings(left: string, right: string) {
  return left.localeCompare(right, 'pt-BR', { sensitivity: 'base' });
}

export function sortDemoRequests(requests: DashboardRequest[], sortState: TableSortState | null) {
  if (!sortState) {
    return [...requests];
  }

  const sorted = [...requests].sort((left, right) => {
    let result = 0;

    switch (sortState.key) {
      case 'id':
        result = compareStrings(left.id, right.id);
        break;
      case 'requester':
        result = compareStrings(left.requester, right.requester);
        break;
      case 'department':
        result = compareStrings(left.department, right.department);
        break;
      case 'amount':
        result = left.amount - right.amount;
        break;
      case 'submittedAt':
        result = compareStrings(left.submittedAt, right.submittedAt);
        break;
      case 'status':
        result = compareStrings(left.status, right.status);
        break;
      default:
        result = 0;
    }

    return sortState.direction === 'asc' ? result : -result;
  });

  return sorted;
}

export function paginateRequests<T>(items: T[], page: number, pageSize: number) {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(amount);
}
