/**
 * Interface representing a LoggerService used to logging in a proper format.
 */
export interface ILoggerService {
  /**
   * Emit a debugging log.
   * @param caller Who emit the logs ?
   * @param message Message of the log.
   */
  debug(caller: any, message: string): void;

  /**
   * Emit an informational log.
   * @param caller Who emit the logs ?
   * @param message Message of the log.
   */
  info(caller: any, message: string): void;

  /**
   * Emit a warning log.
   * @param caller Who emit the logs ?
   * @param message Message of the log.
   */
  warn(caller: any, message: string): void;

  /**
   * Emit an error log.
   * @param caller Who emit the logs ?
   * @param message Message of the log.
   */
  error(caller: any, message: string): void;
}
