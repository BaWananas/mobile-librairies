import {TableColumns} from './TableColumns';
import {TableFooter} from './TableFooter';

export class Table<T> {
  constructor(public data: T, columns: TableColumns, footer?: TableFooter) {
  }
}
