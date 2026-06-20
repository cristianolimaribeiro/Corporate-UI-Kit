import type { PaginationProps } from './Pagination.types';
import { classNames } from '../../utils/classNames';
import styles from './Pagination.module.css';

function buildPageItems(page: number, totalPages: number) {
  const pages = new Set<number>([1, totalPages, page - 1, page, page + 1]);
  return Array.from(pages)
    .filter((candidate) => candidate >= 1 && candidate <= totalPages)
    .sort((left, right) => left - right)
    .reduce<Array<number | 'ellipsis'>>((items, current, index, array) => {
      const previous = array[index - 1];
      if (index > 0 && previous !== undefined && current - previous > 1) {
        items.push('ellipsis');
      }
      items.push(current);
      return items;
    }, []);
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  firstLabel = 'Primeira página',
  previousLabel = 'Página anterior',
  nextLabel = 'Próxima página',
  lastLabel = 'Última página',
  className,
  ...props
}: PaginationProps) {
  const items = buildPageItems(page, totalPages);
  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  return (
    <nav className={classNames(styles.nav, className)} aria-label="Paginação" {...props}>
      <ul className={styles.list}>
        <li>
          <button
            type="button"
            className={styles.button}
            disabled={!canGoPrev}
            onClick={() => onPageChange(1)}
            aria-label={firstLabel}
          >
            «
          </button>
        </li>
        <li>
          <button
            type="button"
            className={styles.button}
            disabled={!canGoPrev}
            onClick={() => onPageChange(page - 1)}
            aria-label={previousLabel}
          >
            ‹
          </button>
        </li>
        {items.map((item, index) =>
          item === 'ellipsis' ? (
            <li key={`ellipsis-${index}`} className={styles.ellipsis} aria-hidden="true">
              …
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                className={classNames(styles.pageButton, item === page && styles['pageButton--active'])}
                onClick={() => onPageChange(item)}
                aria-current={item === page ? 'page' : undefined}
                aria-label={`Página ${item}`}
                disabled={item === page}
              >
                {item}
              </button>
            </li>
          ),
        )}
        <li>
          <button
            type="button"
            className={styles.button}
            disabled={!canGoNext}
            onClick={() => onPageChange(page + 1)}
            aria-label={nextLabel}
          >
            ›
          </button>
        </li>
        <li>
          <button
            type="button"
            className={styles.button}
            disabled={!canGoNext}
            onClick={() => onPageChange(totalPages)}
            aria-label={lastLabel}
          >
            »
          </button>
        </li>
      </ul>
    </nav>
  );
}
