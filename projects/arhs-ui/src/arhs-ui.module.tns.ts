import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SubscriptionsModule} from './lib/subscriptions/subscriptions.module.tns';
import {SharedModule} from './lib/shared/shared.module.tns';

const MODULES = [
  //SubscriptionsModule,
  //SharedModule
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
    DECLARATION,
    MODULES,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ArhsUiModuleTns { }
