import {Injectable} from '@angular/core';
import {ILoggerService} from '../ILoggerService';

/**
 * Implementation of {@link ILoggerService}.
 */
@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILoggerService {

  /**
   * Constructor.
   */
  constructor() {
  }

  /**
   * Refers to {@link ILoggerService}
   * @param caller
   * @param message
   */
  debug(caller: any, message: string): void {
    this.log('DEBUG', caller.constructor.name, message);
  }

  /**
   * Refers to {@link ILoggerService}
   * @param caller
   * @param message
   */
  error(caller: any, message: string): void {
    this.log('ERROR', caller.constructor.name, message);
  }

  /**
   * Refers to {@link ILoggerService}
   * @param caller
   * @param message
   */
  info(caller: any, message: string): void {
    this.log('INFO', caller.constructor.name, message);
  }

  /**
   * Refers to {@link ILoggerService}
   * @param caller
   * @param message
   */
  warn(caller: any, message: string): void {
    this.log('WARN', caller.constructor.name, message);
  }

  /**
   * Format and emit a log.
   * @param level Log level.
   * @param location Emitter of the log.
   * @param message Log message.
   */
  private log(level: string, location: string, message: string): void {
    console.log('[' + new Date().toLocaleString() + '] - ' + level + ' - ' + location + ' : ' + message);
  }


}
