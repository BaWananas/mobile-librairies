import {NgModule} from '@angular/core';
import {SharedModule} from './lib/shared/shared.module';

/**
 * Imported modules.
 */
const MODULES = [
  SharedModule
];

/**
 * Component declaration of the module.
 */
const DECLARATION = [
];

/**
 * Root module of the @arhs/ui NPM module - Web version.
 */
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
