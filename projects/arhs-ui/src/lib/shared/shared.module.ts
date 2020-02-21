import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {BasicCardComponent} from './components/singles/basic-card/basic-card.component';
import {BasicTableComponent} from './components/lists/basic-table/basic-table.component';

const DECLARATION = [
  BasicTableComponent,
  BasicCardComponent,
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
