import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupsListComponent} from './components/lists/groups-list/groups-list.component.tns';

const DECLARATION = [
  GroupsListComponent
];

@NgModule({
  declarations: [
    DECLARATION
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DECLARATION
  ]
})
export class SubscriptionsModule { }
