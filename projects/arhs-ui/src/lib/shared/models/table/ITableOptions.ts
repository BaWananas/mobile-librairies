/**
 * Represent the generic options for a table.
 */
export interface ITableOptions<T> {
  /**
   * There is a footer ?
   */
  footer: boolean;
  /**
   * Is the header is sticky ?
   */
  stickyHeader: boolean;
  /**
   * Is the footer is sticky ?
   */
  stickyFooter: boolean;
  /**
   * There is pagination ?
   */
  pagination: boolean;
  /**
   * Define the available choices for pagination.
   */
  paginationSorting: number[];
  /**
   * There is sorting ?
   */
  sorting: boolean;
  /**
   * There is filtering ?
   */
  filtering: boolean;
  /**
   * The user can select any element in the table ?
   */
  selection: boolean;
}
