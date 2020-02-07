import {FooterValue} from './types/FooterValue';

/**
 * Represent a column of a table (including the footer value of the column).
 */
export interface ITableColumn {
  /**
   * Id of the column (used for html Id tag).
   */
  id: string;
  /**
   * Displayed title of the column.
   */
  title: string;
  /**
   * Reference to the member of the data object displayed in the table.
   *
   * For example, if we specify an object obj = {name: 'The name'}, the corresponding dataRef for a column 'Name' was 'name'.
   */
  dataRef: string;
  /**
   * A function that will be called to return the displayed value of a column footer.
   */
  footer?: FooterValue;
}
