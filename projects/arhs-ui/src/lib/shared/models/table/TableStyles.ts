import {ITableStyles} from './ITableStyles';

/**
 * Implementation of {@link ITableStyles}, please refer to it.
 */
export class TableStyles implements ITableStyles {
  /**
   * Refers to {@link ITableStyles}
   */
  filterContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  filterInput: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  footerContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  footerText: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  headerContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  headerText: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  paginationContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  rowContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  rowText: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  selectionContainer: string[];
  /**
   * Refers to {@link ITableStyles}
   */
  tableContainer: string[];

  /**
   * Refers to {@link ITableStyles}
   */
  arrayToString(array: string[]): string {
    let styles = '';

    array.forEach(value => {
      styles += ' ' + value;
    });

    return styles;
  }
}
