import {FooterValue} from './types/FooterValue';

export interface ITableColumn {
  id: string;
  title: string;
  dataRef: string;
  footer?: FooterValue;
}
