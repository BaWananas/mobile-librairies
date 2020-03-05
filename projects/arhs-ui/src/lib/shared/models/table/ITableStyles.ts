/**
 * Define various style aspects of a table.
 */
export interface ITableStyles {
  /**
   * The table container.
   */
  tableContainer: string[];
  /**
   * The filtering container.
   */
  filterContainer: string[];
  /**
   * The filtering input.
   */
  filterInput: string[];
  /**
   * The selection related container.
   */
  selectionContainer: string[];
  /**
   * The pagination related container.
   */
  paginationContainer: string[];
  /**
   * Header's containers of the table (e.g. Groups)
   */
  headerContainer: string[];
  /**
   * Header's texts of the table.
   */
  headerText: string[];
  /**
   * Row's containers of the table.
   */
  rowContainer: string[];
  /**
   * Row's texts of the table.
   */
  rowText: string[];
  /**
   * The footer container of the table.
   */
  footerContainer: string[];
  /**
   * The footer text of the table.
   */
  footerText: string[];

  /**
   * Convert an array containing styles into a string.
   */
  arrayToString(array: string[]): string;
}
