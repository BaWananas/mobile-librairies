import {EventEmitter, Input, Output, TemplateRef} from '@angular/core';

/**
 * TODO - For future version
 * @ignore
 */
export abstract class BasicCardCommon {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() body: TemplateRef<any>;

  @Output() exit: EventEmitter<any> = new EventEmitter<any>();

  public exitCard(): void {
    this.exit.emit();
  }
}
