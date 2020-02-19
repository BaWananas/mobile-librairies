import {NgModule} from '@angular/core';
import {SharedModule} from './lib/shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MODULES = [SharedModule,
];

const DECLARATION = [
];

@NgModule({
  declarations: [
    DECLARATION,
  ],
  imports: [
    MODULES,
    BrowserAnimationsModule,
  ],
  exports: [
    MODULES,
    DECLARATION,
  ],
})
export class ArhsUiModule { }
