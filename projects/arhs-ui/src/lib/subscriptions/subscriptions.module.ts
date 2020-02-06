import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupsListComponent} from './components/lists/groups-list/groups-list.component';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {BasicTableComponent} from '../shared/components/basic-table/basic-table.component.tns';
import {SharedModule} from '../shared/shared.module';

const DECLARATION = [
  GroupsListComponent
];

@NgModule({
  declarations: [
    DECLARATION,
    BasicTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    DECLARATION
  ]
})
export class SubscriptionsModule { }
