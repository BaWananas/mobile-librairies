/**
 * Define various style aspects of a table.
 */
export interface ITableStyles {
  /**
   * The table container.
   */
  _tableContainer: string[];
  /**
   * The filtering container.
   */
  _filterContainer: string[];
  /**
   * The filtering input.
   */
  _filterInput: string[];
  /**
   * The selection related container.
   */
  _selectionContainer: string[];
  /**
   * The pagination related container.
   */
  _paginationContainer: string[];
  /**
   * Header's containers of the table (e.g. Groups)
   */
  _headerContainer: string[];
  /**
   * Header's texts of the table.
   */
  _headerText: string[];
  /**
   * Row's containers of the table.
   */
  _rowContainer: string[];
  /**
   * Row's texts of the table.
   */
  _rowText: string[];
  /**
   * The footer container of the table.
   */
  _footerContainer: string[];
  /**
   * The footer text of the table.
   */
  _footerText: string[];

  /**
   * Accessor to directly get the string value of the styles.
   */
  tableContainer(): string;
  /**
   * Accessor to directly get the string value of the styles.
   */
  filterContainer(): string;
  /**
   * Accessor to directly get the string value of the styles.
   */
  filterInput(): string;
  /**
   * Accessor to directly get the string value of the styles.
   */
  selectionContainer(): string;
  /**
   * Accessor to directly get the string value of the styles.
   */
  paginationContainer(): string;
  /**
   * Accessor to directly get the string value of the styles.
   */
  headerContainer(): string;
  /**
   * Accessor to directly get the string value of the styles.
   */
  headerText(): string;
  /**
   * Accessor to directly get the string value of the styles.
   */
  rowContainer(): string;
  /**
   * Accessor to directly get the string value of the styles.
   */
  rowText(): string;
  /**
   * Accessor to directly get the string value of the styles.
   */
  footerContainer(): string;
  /**
   * Accessor to directly get the string value of the styles.
   */
  footerText(): string;
}
