import {Component} from '@angular/core';
import {BasicTableCommon} from './basic-table.common';
import {NavigationBarVisibility} from '@nativescript/core/ui/enums';
import auto = NavigationBarVisibility.auto;
import {LoggerService} from '@arhs/core';
import {ITableColumn} from '../../../models/table/ITableColumn';

/**
 * Generic table component for mobile platform.
 */
@Component({
  selector: 'arhs-ui-basic-table',
  templateUrl: './basic-table.component.tns.html',
})
export class BasicTableComponent<T> extends BasicTableCommon<T> {

  /**
   * Constructor.
   * @param logger Service used for logging.
   */
  constructor(logger: LoggerService) {
    super(logger);
  }

  /**
   * No need to do special operation for destroying the table
   */
  protected destroyData(): void {
  }

  /**
   * No need to do special operation for init the table
   */
  protected initData(): void {
  }

  /**
   * No need to do special operation for refreshing table : angular binding was in charge of that here.
   */
  protected refresh(newElements: T[]): void {
  }

  /**
   * TODO
   * Refers to {@link TableComponent}
   * @param value Filter.
   */
  applyFiltering(value: string): void {
  }

  /**
   * Format element content.
   * @param element The element content.
   * @param column The column corresponding to the element.
   */
  public formatElement(element: string, column: ITableColumn): string {
    if (element && column && column.title && element.length > (1.5 * column.title.length)) {
      return element.slice(0, (1.5 * column.title.length)) + '..';
    } else {
      return element;
    }
  }

  /**
   * Used to get the specific columns sizing for GridLayout
   */
  public columnsToStringValue(): string {
    let columns = '';
    this.columns.forEach((value, index) => {
      if (index === 0) {
        columns += 'auto';
      } else {
        columns += ',auto';
      }
    });
    if (this.details) {
      columns += ',*';
    }
    return columns;
  }

  /**
   * Used to get the specific rows sizing for GridLayout
   */
  public rowsToStringValue(): string {
    let rows = 'auto,auto';
    this.data.forEach(value => {
      rows += ',auto,auto';
    });
    if (this.options.footer) {
      rows += ',auto,auto';
    }
    return rows;
  }

  /**
   * Get the initial index for the footer rows section.
   */
  public getInitialRowsFooterIndex(): number {
    return this.rowsToStringValue().split(',').length - 1 - 1;
  }
}
