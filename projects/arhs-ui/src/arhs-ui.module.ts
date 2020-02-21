import {NgModule} from '@angular/core';
import {SharedModule} from './lib/shared/shared.module';

const MODULES = [
  SharedModule
];

const DECLARATION = [
];

@NgModule({
  declarations: [
    DECLARATION,
  ],
  imports: [
    MODULES,
  ],
  exports: [
    MODULES,
    DECLARATION,
  ],
})
export class ArhsUiModule { }
