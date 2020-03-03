import {HttpErrorResponse} from '@angular/common/http';
import {HttpSubError} from './HttpSubError';

/**
 * Represent a custom Http error.
 */
export class HttpError {
  /**
   * Http status of the error (e.g. 404).
   */
  public status: number;
  /**
   * Http string status of the error (e.g. Not found).
   */
  public statusError: string;
  /**
   * Timestamp of the error.
   */
  public timestamp: string;
  /**
   * A message describing the error (e.g. Entity wasn't found on the server).
   */
  public message: string;
  /**
   * Trace for debugging purpose.
   */
  public debugMessage: string;
  /**
   * Additional sub errors describing the main error (e.g. If validation in POST form, sub errors point the incorrect inputs value).
   */
  public subErrors: HttpSubError[];

  /**
   * Constructor.
   * @param status Http status code.
   * @param statusError Http status string.
   * @param timestamp Optional timestamp.
   * @param message Optional message describing the error.
   * @param debugMessage Optional trace of the error (string format).
   * @param subErrors Optional sub errors.
   */
  constructor(status: number,
              statusError: string,
              timestamp: string = null,
              message: string = null,
              debugMessage: string = null,
              subErrors: HttpSubError[] = null) {
    this.status = status;
    this.statusError = statusError;
    this.timestamp = timestamp;
    this.message = message;
    this.debugMessage = debugMessage;
    this.subErrors = subErrors;
  }

  /**
   * Parse a basic angular {@link HttpErrorResponse} in a custom HttpError.
   * @param error Angular Http error.
   * @returns HttpError Custom HttpError.
   */
  public static parseTo(error: HttpErrorResponse): HttpError {
    return new HttpError(error.status,
      error.statusText,
      error.error.timestamp,
      error.error.message,
      error.error.debugMessage);
  }
}
