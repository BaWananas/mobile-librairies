import {Injectable} from '@angular/core';
import {ITableFactory} from '../ITableFactory';
import {FooterValue} from '../../models/table/types/FooterValue';
import {ITableColumn} from '../../models/table/ITableColumn';
import {TableColumn} from '../../models/table/TableColumn';
import {ITableOptions} from '../../models/table/ITableOptions';
import {TableOptions} from '../../models/table/TableOptions';
import {ITableStyles} from '../../models/table/ITableStyles';
import {TableStyles} from '../../models/table/TableStyles';

/**
 * Implementation of {@link ITableFactory}.
 * Refers to {@link ITableFactory}
 */
@Injectable({
  providedIn: 'root'
})
export class TableFactoryService implements ITableFactory {

  /**
   * Refers to {@link ITableFactory}
   */
  getColumns(columnsTitle: string[], dataRef: string[], footers?: FooterValue[]): ITableColumn[] {
    const columnsArray: TableColumn[] = [];

    if (dataRef && columnsTitle) {
      dataRef.forEach((value, index) => {
        columnsArray.push(new TableColumn(value,
          (columnsTitle.length >= index) ? columnsTitle[index] : null,
          value,
          (footers && footers.length >= index) ? footers[index] : null));
      });
    }

    return columnsArray;
  }

  /**
   * Refers to {@link ITableFactory}
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
  }): ITableOptions<T> {
    return new TableOptions(
      options.footer,
      options.stickyHeader,
      options.stickyFooter,
      options.pagination,
      options.paginationSorting,
      options.sorting,
      options.filtering,
      options.selection);
  }

  /**
   * Refers to {@link ITableFactory}
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
    footerText?: string[]
  }): ITableStyles {
    return new TableStyles(
      styles.filterContainer,
      styles.filterInput,
      styles.footerContainer,
      styles.footerText,
      styles.headerContainer,
      styles.headerText,
      styles.paginationContainer,
      styles.rowContainer,
      styles.rowText,
      styles.selectionContainer,
      styles.tableContainer
    );
  }
}
