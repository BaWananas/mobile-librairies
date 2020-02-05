import {NgModule} from '@angular/core';
import {SubscriptionsModule} from './lib/subscriptions/subscriptions.module';
import {SharedModule} from './lib/shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MODULES = [
  SubscriptionsModule,
  SharedModule
];

const DECLARATION = [];

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
