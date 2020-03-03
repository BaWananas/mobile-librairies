import {FooterValue} from './types/FooterValue';
import {ITableColumn} from './ITableColumn';

/**
 * Implementation of {@link ITableColumn}.
 */
export class TableColumn implements ITableColumn {
  /**
   * Constructor.
   * @param id ID of the column.
   * @param title Displayed title of the column.
   * @param dataRef Reference to the member of the data object displayed in the table.
   * For example, if we specify an object obj = {name: 'The name'}, the corresponding dataRef for a column 'Name' was 'name'.
   * @param footer A function that will be called to return the displayed value of a column footer.
   */
  constructor(public id: string, public title: string, public dataRef: string, public footer?: FooterValue) {
  }
}
