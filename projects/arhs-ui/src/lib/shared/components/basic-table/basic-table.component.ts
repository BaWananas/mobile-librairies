import {Component, ViewChild} from '@angular/core';
import {BasicTableCommon} from './basic-table.common';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'arhs-ui-basic-table',
  templateUrl: './basic-table.component.html',
})
export class BasicTableComponent<T> extends BasicTableCommon<T> {

  dataSource: MatTableDataSource<T>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  protected destroyData(): void {
  }

  protected initData(): void {
    this.initTable();
  }

  protected refresh(newElements: T[]): void {
    if (newElements) {
      console.log('Refresh !');
      this.initTable(newElements);
    }
  }

  public applyFiltering(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }

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
