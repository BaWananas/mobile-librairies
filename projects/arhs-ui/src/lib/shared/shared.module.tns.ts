import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicTableComponent} from './components/lists/basic-table/basic-table.component.tns';
import {BasicCardComponent} from './components/singles/basic-card/basic-card.component.tns';

const DECLARATION = [
  BasicTableComponent,
  BasicCardComponent,
];

@NgModule({
  schemas: [
    NO_ERRORS_SCHEMA
  ],
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
