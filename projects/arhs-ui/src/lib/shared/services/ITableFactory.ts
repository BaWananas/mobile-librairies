import {ITableColumn} from '../models/table/ITableColumn';
import {ITableOptions} from '../models/table/ITableOptions';
import {FooterValue} from '../models/table/types/FooterValue';
import {ITableStyles} from '../models/table/ITableStyles';

/**
 * Factory for table elements (used to build a table component).
 */
export interface ITableFactory {

  /**
   * Get an object encapsulating table options.
   * @param options Available options for a table.
   */
  getOptions<T>(options: {
    footer?: boolean,
    stickyHeader?: boolean,
    stickyFooter?: boolean,
    pagination?: boolean,
    paginationSorting?: number[],
    sorting?: boolean,
    filtering?: boolean,
    selection?: boolean
  }): ITableOptions<T>;

  /**
   * Get an object encapsulating table columns.
   * @param columnsTitle String array containing the displayed titles of the columns.
   * The length of the array must be the same of dataRef and footers array.
   * @param dataRef String array containing the exact name of the data object member displayed in the table.
   * The length of the array must be the same of footers and title array.
   * @param footers (Optional) FooterValue function array containing a function called to get the value of displayed footer.
   * The length of the array must be the same of dataRef and title array.
   * @return ITableColumn[] Get an object encapsulating columns header and footer.
   */
  getColumns(columnsTitle: string[], dataRef: string[], footers?: FooterValue[]): ITableColumn[];

  /**
   * Get an object encapsulating CSS class for a table.
   * @param styles The customizable styles. Only CSS class accepted.
   * @returns ITableStyles The object encapsulating styles class.
   */
  getStyles(styles: {
    tableContainer?: string[];
    filterContainer?: string[];
    filterInput?: string[];
    selectionContainer?: string[];
    paginationContainer?: string[];
    headerContainer?: string[];
    headerText?: string[];
    rowContainer?: string[];
    rowText?: string[];
    footerContainer?: string[];
    footerText?: string[];
  }): ITableStyles;
}
