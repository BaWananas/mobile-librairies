import {Component, ViewChild} from '@angular/core';
import {BasicTableCommon} from './basic-table.common';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ITableFactory} from '../../../services/ITableFactory';
import {TableFactoryService} from '../../../services/implementations/table-factory.service';
import {ILoggerService, LoggerService} from '@arhs/core';

/**
 * Generic table component for web platform.
 * Example of usage:
 * <example-url>http://localhost/demo/mysample.component.html</example-url>
 * <example-url>/demo/mysample.component.html</example-url>
 */
@Component({
  selector: 'arhs-ui-basic-table',
  templateUrl: './basic-table.component.html',
  styles: [
    '.mat-column-select {overflow: initial;}',
    'tr.detail-row {height: 0; border-bottom-width: 0px; border-top-width: 0px}',
    '.element-row td {border-bottom-width: 0;}',
    '.element-detail {overflow: hidden; display: flex;}'
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BasicTableComponent<T> extends BasicTableCommon<T> {

  /**
   * Refers to {@link ITableFactory}
   */
  private tableFactory: ITableFactory;
  /**
   * Correspond to the element selection.
   */
  selection: SelectionModel<T> = new SelectionModel<T>(true, []);
  /**
   * Correspond to the elements container for the table.
   */
  dataSource: MatTableDataSource<T>;
  /**
   * Current expanded element.
   */
  expandedElement: T | null;
  /**
   * Correspond to the paginator object.
   */
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  /**
   * Correspond to the sorting object.
   */
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  /**
   * @param tableFactory Refers to {@link ITableFactory}
   * @param logger Refers to LoggerService in @arhs/core NPM package.
   */
  constructor(tableFactory: TableFactoryService,
              logger: LoggerService) {
    super(logger);
    this.tableFactory = tableFactory;
    this.logger = logger;
  }

  /**
   * Refers to {@link TableComponent}
   */
  protected destroyData(): void {
    if (this.options.selection) {
      this.selection.changed.unsubscribe();
    }
  }

  /**
   * Refers to {@link TableComponent}
   */
  protected initData(): void {
    if (this.options.selection) {
      this.selection.changed.subscribe((value) => {
        this.onSelectElement(value.source.selected);
      });
    }
    this.initTable();
  }

  /**
   * Refers to {@link TableComponent}
   */
  protected refresh(newElements: T[]): void {
    if (newElements) {
      this.logger.debug(this, 'Refresh generic table.');
      this.initTable(newElements);
    }
  }

  /**
   * Refers to {@link TableComponent}
   */
  public applyFiltering(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  /**
   * Called when clicked on the master button for selection (header of the selection column).
   *
   * Clear selection if all selected; Select all element if not.
   */
  public masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /**
   * All the element are selected ?
   * @return True if all the elements are selected, false if not.
   */
  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * Called when user click on an element.
   * @param element Selected element.
   */
  public onElementSelected(element: T): void {
    if (this.details) {
      this.expandedElement = this.expandedElement === element ? null : element;
    } else {
      this.selection.toggle(element);
    }
  }

  /**
   * Refers to {@link TableComponent}
   */
  displayedColumns(): string[] {
    const columns: string[] = super.displayedColumns();
    if (this.options.selection) {
      columns.unshift('_select');
    }
    return columns;
  }

  /**
   * Init the elements of the table.
   *
   * @param element Elements of the table.
   */
  private initTable(element: T[] = this.data): void {
    if (element) {
      this.dataSource = new MatTableDataSource<T>(element);

      // Init paginating if enabled.
      if (this.options.pagination) {
        this.dataSource.paginator = this.paginator;
      }

      // Init sorting if enabled.
      if (this.options.sorting) {
        this.dataSource.sort = this.sort;
      }
    }
  }
}
