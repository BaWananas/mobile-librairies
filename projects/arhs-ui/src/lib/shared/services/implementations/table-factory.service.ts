import {Injectable} from '@angular/core';
import {ITableFactory} from '../ITableFactory';
import {FooterValue} from '../../models/table/types/FooterValue';
import {ITableColumn} from '../../models/table/ITableColumn';
import {TableColumn} from '../../models/table/TableColumn';
import {ITableOptions} from '../../models/table/ITableOptions';
import {TableSelection} from '../../models/table/types/TableSelection';
import {TableOptions} from '../../models/table/TableOptions';

@Injectable({
  providedIn: 'root'
})
export class TableFactoryService implements ITableFactory {

  constructor() {}

  getColumns(columnsTitle: string[], dataRef: string[], footers?: FooterValue[]): ITableColumn[] {
    const columnsArray: TableColumn[] = [];
    dataRef.forEach((value, index) => {
      columnsArray.push(new TableColumn(value,
        (columnsTitle.length >= index) ? columnsTitle[index] : null,
        value,
        (footers.length >= index) ? footers[index] : null));
    });
    return columnsArray;
  }

  getOptions<T>(footer?: boolean,
                stickyHeader?: boolean,
                stickyFooter?: boolean,
                pagination?: boolean,
                paginationSorting?: number[],
                sorting?: boolean,
                filtering?: boolean,
                selection?: TableSelection<T>): ITableOptions<T> {
    return new TableOptions(footer,
      stickyHeader,
      stickyFooter,
      pagination,
      paginationSorting,
      sorting,
      filtering,
      selection);
  }
}
