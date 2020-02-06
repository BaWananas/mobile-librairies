import {ITableOptions} from './ITableOptions';
import {TableSelection} from './types/TableSelection';

export class TableOptions<T> implements ITableOptions<T> {
  footer = false;
  stickyHeader = false;
  stickyFooter = false;
  pagination = false;
  paginationSorting: number[] = [1, 5, 25, 50];
  sorting = false;
  filtering = false;
  selection: TableSelection<T> = null;

  constructor(footer?: boolean,
              stickyHeader?: boolean,
              stickyFooter?: boolean,
              pagination?: boolean,
              paginationSorting?: number[],
              sorting?: boolean,
              filtering?: boolean,
              selection?: TableSelection<T>) {
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
