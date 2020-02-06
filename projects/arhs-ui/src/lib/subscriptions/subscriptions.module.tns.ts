import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupsListComponent} from './components/lists/groups-list/groups-list.component.tns';
import {SharedModule} from '../shared/shared.module.tns';

const DECLARATION = [
  GroupsListComponent
];

@NgModule({
  declarations: [
    DECLARATION
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DECLARATION
  ]
})
export class SubscriptionsModule { }
