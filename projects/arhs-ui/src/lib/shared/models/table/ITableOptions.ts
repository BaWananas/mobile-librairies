import {TableSelection} from './types/TableSelection';

export interface ITableOptions<T> {
  footer: boolean;
  stickyHeader: boolean;
  stickyFooter: boolean;
  pagination: boolean;
  paginationSorting: number[];
  sorting: boolean;
  filtering: boolean;
  selection: TableSelection<T>;
}
