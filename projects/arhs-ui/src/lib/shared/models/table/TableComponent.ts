import {EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef} from '@angular/core';
import {TableOptions} from './TableOptions';
import {TableColumn} from './TableColumn';
import {ILoggerService} from '@arhs/core';
import {Subscription} from 'rxjs';
import {ITableStyles} from './ITableStyles';

/**
 * Interface to define the default properties and behaviors of every tables.
 */
export abstract class TableComponent<T> implements OnInit, OnDestroy {
  /**
   * Data of the table
   */
  @Input() data: T[];
  /**
   * Event received when table must be refreshed.
   */
  @Input() refreshEvent: EventEmitter<T[]>;
  /**
   * Columns of the table.
   */
  @Input() columns: TableColumn[];
  /**
   * Options of the table.
   */
  @Input() options: TableOptions<T>;
  /**
   * (Optional) Detail template to display when user click on element.
   */
  @Input() details: TemplateRef<any>;
  /**
   * Optional styles of the table.
   */
  @Input() styles: ITableStyles;
  /**
   * Event emitted when element is selected by the user.
   */
  @Output() onSelect: EventEmitter<T[]> = new EventEmitter<T[]>();

  /**
   * RXJS subscription for refreshing event.
   */
  private refreshEventSubscription: Subscription;

  /**
   * Constructor.
   * @param logger Refers to @arhs/core NPM package.
   */
  constructor(protected logger: ILoggerService) {
  }

  /**
   * Refresh the table.
   *
   * @param newElements New elements of the table.
   */
  protected abstract refresh(newElements: T[]): void;

  /**
   * Called when initializing the table.
   *
   * Init the default properties and data for the table (Including subscription of events).
   */
  protected abstract initData(): void;

  /**
   * Called when destroying the table.
   *
   * Cleanings functions should be called here.
   */
  protected abstract destroyData(): void;

  /**
   * Implementation of ngOnInit() in {@link OnInit}.
   */
  ngOnInit(): void {
    this.logger.debug(this, 'Init generic table.');
    this.refreshEventSubscription = this.refreshEvent.subscribe((newElements) => {
      this.refresh(newElements);
    });
    this.initData();
  }

  /**
   * Implementation of ngOnDestroy() in {@link OnDestroy}.
   */
  ngOnDestroy(): void {
    this.logger.debug(this, 'Destroy generic table.');
    if (this.refreshEventSubscription) {
      this.refreshEventSubscription.unsubscribe();
    }
    this.destroyData();
  }

  /**
   * Get the title of table's columns.
   */
  public displayedColumns(): string[] {
    const columns: string[] = [];
    this.columns.forEach((value: TableColumn) => {
      columns.push(value.id);
    });
    return columns;
  }

  /**
   * Called when element of the table is selected.
   *
   * @param elements Current selected elements.
   */
  public onSelectElement(elements: T[]): void {
    this.onSelect.emit(elements);
  }

  /**
   * Apply a filter on the table.
   *
   * @param value Filter.
   */
  public abstract applyFiltering(value: string): void;

}
