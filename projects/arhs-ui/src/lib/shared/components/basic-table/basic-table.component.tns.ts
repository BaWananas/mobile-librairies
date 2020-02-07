import { Component, OnInit } from '@angular/core';
import {BasicTableCommon} from './basic-table.common';

/**
 * Generic table component for mobile platform.
 */
@Component({
  selector: 'arhs-ui-basic-table',
  templateUrl: './basic-table.component.tns.html',
})
export class BasicTableComponent<T> extends BasicTableCommon<T> {

  // TODO
  protected destroyData(): void {
  }

  // TODO
  protected initData(): void {
  }

  // TODO
  protected refresh(newElements: T[]): void {
  }

  // TODO
  applyFiltering(value: string): void {
  }

}
