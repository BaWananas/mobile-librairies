import {ITableOptions} from './ITableOptions';

/**
 * Implementation of {@link ITableOptions}.
 * Refers to {@link ITableOptions}
 */
export class TableOptions<T> implements ITableOptions<T> {
  /**
   * Refers to {@link ITableOptions}
   */
  footer = false;
  /**
   * Refers to {@link ITableOptions}
   */
  stickyHeader = false;
  /**
   * Refers to {@link ITableOptions}
   */
  stickyFooter = false;
  /**
   * Refers to {@link ITableOptions}
   */
  pagination = false;
  /**
   * Refers to {@link ITableOptions}
   */
  paginationSorting: number[] = [1, 5, 25, 50];
  /**
   * Refers to {@link ITableOptions}
   */
  sorting = false;
  /**
   * Refers to {@link ITableOptions}
   */
  filtering = false;
  /**
   * Refers to {@link ITableOptions}
   */
  selection = false;

  /**
   * Refers to {@link ITableOptions}
   */
  constructor(footer = false,
              stickyHeader = false,
              stickyFooter = false,
              pagination = false,
              paginationSorting = [1, 5, 25, 50],
              sorting = false,
              filtering = false,
              selection = false) {
    this.footer = footer;
    this.stickyHeader = stickyHeader;
    this.stickyFooter = stickyFooter;
    this.pagination = pagination;
    this.paginationSorting = paginationSorting;
    this.sorting = sorting;
    this.filtering = filtering;
    this.selection = selection;
  }
}
