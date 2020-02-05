import {ITableSelection} from './ITableSelection';
import {EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {Table} from './Table';

export abstract class TableOptions<T> implements OnInit, OnDestroy {
  @Input() pagination = false;
  @Input() paginationSorting: number[] = [1, 5, 25, 50];
  @Input() sorting = false;
  @Input() filtering = false;
  @Input() selection: ITableSelection<T>;
  @Input() footer = false;
  @Input() stickyHeader = false;
  @Input() stickyFooter = false;
  @Input() refreshEvent: EventEmitter<T[]>;

  public table: Table<T>;

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
}
