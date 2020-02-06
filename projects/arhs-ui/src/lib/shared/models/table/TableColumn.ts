import {FooterValue} from './types/FooterValue';
import {ITableColumn} from './ITableColumn';

export class TableColumn implements ITableColumn {
  constructor(public id: string, public title: string, public dataRef: string, public footer?: FooterValue) {
  }
}
