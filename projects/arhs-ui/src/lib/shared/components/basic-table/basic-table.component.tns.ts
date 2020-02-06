import { Component, OnInit } from '@angular/core';
import {BasicTableCommon} from './basic-table.common';

@Component({
  selector: 'arhs-ui-basic-table',
  templateUrl: './basic-table.component.tns.html',
})
export class BasicTableComponent<T> extends BasicTableCommon<T> {

  protected destroyData(): void {
  }

  protected initData(): void {
  }

  protected refresh(newElements: T[]): void {
  }

}
