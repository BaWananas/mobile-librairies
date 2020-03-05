import {ITableStyles} from './ITableStyles';

/**
 * Implementation of {@link ITableStyles}, please refer to it.
 */
export class TableStyles implements ITableStyles {

  /**
   * Refers to {@link ITableStyles}
   */
  _filterContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  _filterInput: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  _footerContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  _footerText: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  _headerContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  _headerText: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  _paginationContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  _rowContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  _rowText: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  _selectionContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  _tableContainer: string[];

  /**
   * Constructor.
   * @param filterContainer
   * @param filterInput
   * @param footerContainer
   * @param footerText
   * @param headerContainer
   * @param headerText
   * @param paginationContainer
   * @param rowContainer
   * @param rowText
   * @param selectionContainer
   * @param tableContainer
   */
  constructor(filterContainer?: string[],
              filterInput?: string[],
              footerContainer?: string[],
              footerText?: string[],
              headerContainer?: string[],
              headerText?: string[],
              paginationContainer?: string[],
              rowContainer?: string[],
              rowText?: string[],
              selectionContainer?: string[],
              tableContainer?: string[]) {
    this._filterContainer = filterContainer;
    this._filterInput = filterInput;
    this._footerContainer = footerContainer;
    this._footerText = footerText;
    this._headerContainer = headerContainer;
    this._headerText = headerText;
    this._paginationContainer = paginationContainer;
    this._rowContainer = rowContainer;
    this._rowText = rowText;
    this._selectionContainer = selectionContainer;
    this._tableContainer = tableContainer;
  }

  /**
   * Refers to {@link ITableStyles}
   */
  filterContainer(): string {
    return (this._filterContainer) ? this.arrayToString(this._filterContainer) : '';
  }

  /**
   * Refers to {@link ITableStyles}
   */
  filterInput(): string {
    return (this._filterInput) ? this.arrayToString(this._filterInput) : '';
  }

  /**
   * Refers to {@link ITableStyles}
   */
  footerContainer(): string {
    return (this._footerContainer) ? this.arrayToString(this._footerContainer) : '';
  }

  /**
   * Refers to {@link ITableStyles}
   */
  footerText(): string {
    return (this._footerText) ? this.arrayToString(this._footerText) : '';
  }

  /**
   * Refers to {@link ITableStyles}
   */
  headerContainer(): string {
    return (this._headerContainer) ? this.arrayToString(this._headerContainer) : '';
  }

  /**
   * Refers to {@link ITableStyles}
   */
  headerText(): string {
    return (this._headerText) ? this.arrayToString(this._headerText) : '';
  }

  /**
   * Refers to {@link ITableStyles}
   */
  paginationContainer(): string {
    return (this._paginationContainer) ? this.arrayToString(this._paginationContainer) : '';
  }

  /**
   * Refers to {@link ITableStyles}
   */
  rowContainer(): string {
    return (this._rowContainer) ? this.arrayToString(this._rowContainer) : '';
  }

  /**
   * Refers to {@link ITableStyles}
   */
  rowText(): string {
    return (this._rowText) ? this.arrayToString(this._rowText) : '';
  }

  /**
   * Refers to {@link ITableStyles}
   */
  selectionContainer(): string {
    return (this._selectionContainer) ? this.arrayToString(this._selectionContainer) : '';
  }

  /**
   * Refers to {@link ITableStyles}
   */
  tableContainer(): string {
    return (this._tableContainer) ? this.arrayToString(this._tableContainer) : '';
  }

  /**
   * Convert an styles array to a string.
   */
  private arrayToString(array: string[]): string {
    let styles = '';

    array.forEach(value => {
      styles += ' ' + value;
    });

    return styles;
  }
}
