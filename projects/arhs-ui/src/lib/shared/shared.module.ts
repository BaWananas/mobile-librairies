import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicTableComponent} from './components/basic-table/basic-table.component';
import {MatCheckboxModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';

const DECLARATION = [
  BasicTableComponent,
];

@NgModule({
  declarations: [
    DECLARATION,
  ],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
    ],
  exports: [
    DECLARATION,
  ],
})
export class SharedModule { }
