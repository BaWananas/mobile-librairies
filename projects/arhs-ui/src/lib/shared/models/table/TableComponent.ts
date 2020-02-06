import {EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {TableOptions} from './TableOptions';
import {TableColumn} from './TableColumn';

export abstract class TableComponent<T> implements OnInit, OnDestroy {
  @Input() data: T[];
  @Input() refreshEvent: EventEmitter<T[]>;
  @Input() columns: TableColumn[];
  @Input() options: TableOptions<T>;

  protected abstract refresh(newElements: T[]): void;
  protected abstract initData(): void;
  protected abstract destroyData(): void;

  ngOnInit(): void {
    this.refreshEvent.subscribe((newElements) => {
      console.log('refresh event');
      this.refresh(newElements);
    });
    this.initData();
  }

  ngOnDestroy(): void {
    this.refreshEvent.unsubscribe();
    this.destroyData();
  }

  public displayedColumns(): string[] {
    const columns: string[] = [];
    this.columns.forEach((value: TableColumn) => {
      columns.push(value.id);
    });
    return columns;
  }
}
