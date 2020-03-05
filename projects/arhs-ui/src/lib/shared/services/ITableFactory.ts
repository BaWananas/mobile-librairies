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
   * @param footer There is at least one footer ?
   * @param stickyHeader Is the header is sticky ?
   * @param stickyFooter Is the footer is sticky ? (if there are footers)
   * @param pagination Is the table have pagination support ? (buttons, etc.)
   * @param paginationSorting Define the different value for the pagination.
   * @param sorting Is the sorting is available ?
   * @param filtering Is the filtering is possible ?
   * @param selection Define the action on the item selection.
   * @return ITableOptions Encapsulate table's options.
   */
  getOptions<T>(footer?: boolean,
                stickyHeader?: boolean,
                stickyFooter?: boolean,
                pagination?: boolean,
                paginationSorting?: number[],
                sorting?: boolean,
                filtering?: boolean,
                selection?: boolean): ITableOptions<T>;

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
}
