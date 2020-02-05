import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupsListComponent} from './components/lists/groups-list/groups-list.component';
import {MatPaginatorModule, MatTableModule} from '@angular/material';

const DECLARATION = [
  GroupsListComponent
];

@NgModule({
  declarations: [
    DECLARATION
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    DECLARATION
  ]
})
export class SubscriptionsModule { }
