import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {GroupsListCommon} from './groups-list.common';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Group} from '../../../models/Group';

@Component({
  selector: 'arhs-ui-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: []
})
export class GroupsListComponent extends GroupsListCommon {

  dataSource: MatTableDataSource<Group>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  protected refresh(newElements: Group[]): void {
    if (newElements) {
      console.log('Refresh !');
      this.initTable(newElements);
    }
  }

  protected initData(): void {
    this.initTable();
  }

  protected destroyData(): void {
  }

  private initTable(element: Group[] = this.groups): void {
    if (element) {
      this.dataSource = new MatTableDataSource<Group>(element);
      this.dataSource.paginator = this.paginator;
    }
  }

}
