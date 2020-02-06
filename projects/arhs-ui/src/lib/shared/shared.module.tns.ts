import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicTableComponent} from './components/basic-table/basic-table.component.tns';

const DECLARATION = [
  BasicTableComponent
];

@NgModule({
  declarations: [
    DECLARATION
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DECLARATION,
  ],
})
export class SharedModule { }
