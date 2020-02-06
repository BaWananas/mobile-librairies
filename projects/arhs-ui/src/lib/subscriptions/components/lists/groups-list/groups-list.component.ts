import {Component, OnInit, ViewChild} from '@angular/core';
import {GroupsListCommon} from './groups-list.common';
import {Group} from '../../../models/Group';
import {BasicTableComponent} from '../../../../shared/components/basic-table/basic-table.component';
import {TableFactoryService} from '../../../../shared/services/implementations/table-factory.service';

@Component({
  selector: 'arhs-ui-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: []
})
export class GroupsListComponent extends GroupsListCommon implements OnInit {

  @ViewChild('table', {static: true}) table: BasicTableComponent<Group>;

  constructor(tableFactory: TableFactoryService) {
    super(tableFactory);
  }

  ngOnInit(): void {
  }

}
