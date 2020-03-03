import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SharedModule} from './lib/shared/shared.module.tns';

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
 * Root module of the @arhs/ui NPM module - NS Mobile version.
 */
@NgModule({
  declarations: [
    DECLARATION,
  ],
  imports: [
    MODULES,
  ],
  exports: [
    DECLARATION,
    MODULES,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ArhsUiModuleTns { }
