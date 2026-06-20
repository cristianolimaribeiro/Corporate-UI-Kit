import type { TableColumn, TableProps, TableSortState } from './Table.types';
import { classNames } from '../../utils/classNames';
import { Loading } from '../Loading';
import { EmptyState } from '../EmptyState';
import styles from './Table.module.css';

function resolveCell<T>(column: TableColumn<T>, row: T, index: number) {
  if (column.render) {
    return column.render(row, index);
  }

  if (column.accessor) {
    return String(row[column.accessor] ?? '');
  }

  return null;
}

function nextSortState(columnKey: string, current: TableSortState | null): TableSortState | null {
  if (!current || current.key !== columnKey) {
    return { key: columnKey, direction: 'asc' };
  }

  if (current.direction === 'asc') {
    return { key: columnKey, direction: 'desc' };
  }

  return null;
}

export function Table<T>({
  columns,
  data,
  getRowKey,
  caption,
  loading = false,
  emptyState,
  sortState = null,
  onSortChange,
  onRowClick,
  rowAriaLabel,
  className,
  ...props
}: TableProps<T>) {
  const hasInteractiveRows = Boolean(onRowClick);
  const content = loading ? (
      <tr>
        <td className={styles.loadingCell} colSpan={columns.length}>
          <Loading variant="inline" label="Carregando dados da tabela" />
        </td>
      </tr>
    ) : data.length === 0 ? (
      <tr>
        <td className={styles.emptyCell} colSpan={columns.length}>
          {emptyState ?? (
            <EmptyState
              title="Nenhuma linha encontrada"
              description="Tente alterar os filtros acima."
            />
          )}
        </td>
      </tr>
  ) : (
    data.map((row, rowIndex) => (
      <tr
        key={getRowKey(row, rowIndex)}
        className={classNames(hasInteractiveRows && styles.rowClickable)}
        tabIndex={hasInteractiveRows ? 0 : undefined}
        aria-label={hasInteractiveRows ? rowAriaLabel?.(row, rowIndex) : undefined}
        onClick={hasInteractiveRows ? () => onRowClick?.(row, rowIndex) : undefined}
        onKeyDown={
          hasInteractiveRows
            ? (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onRowClick?.(row, rowIndex);
                }
              }
            : undefined
        }
      >
        {columns.map((column) => (
          <td key={column.key} className={classNames(styles.cell, styles[`cell--${column.align ?? 'left'}`])}>
            {resolveCell(column, row, rowIndex)}
          </td>
        ))}
      </tr>
    ))
  );

  return (
    <div className={classNames(styles.root, className)} {...props}>
      <table className={styles.table}>
        <caption className={styles.caption}>{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => {
              const isActiveSort = sortState?.key === column.key;
              const sortLabel = isActiveSort ? sortState?.direction : undefined;
              const ariaSort =
                column.sortable && isActiveSort
                  ? sortState?.direction === 'asc'
                    ? 'ascending'
                    : 'descending'
                  : undefined;

              return (
                <th
                  key={column.key}
                  className={classNames(styles.headCell, styles[`headCell--${column.align ?? 'left'}`])}
                  aria-sort={ariaSort}
                  scope="col"
                >
                  {column.sortable ? (
                    <button
                      type="button"
                      className={styles.sortButton}
                      onClick={() => onSortChange?.(nextSortState(column.key, sortState))}
                      aria-label={
                        column.sortLabel ??
                        `Ordenar por ${typeof column.header === 'string' ? column.header : column.key}`
                      }
                    >
                      <span>{column.header}</span>
                      <span
                        className={classNames(
                          styles.sortIcon,
                          isActiveSort && styles['sortIcon--active'],
                        )}
                        aria-hidden="true"
                      >
                        {sortLabel === 'desc' ? '▼' : sortLabel === 'asc' ? '▲' : '↕'}
                      </span>
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}
