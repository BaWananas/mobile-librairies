import {IHttpErrorService} from '../IHttpErrorService';
import {HttpValidationError} from '../../models/HttpError/HttpValidationError';
import {HttpSubError} from '../../models/HttpError/HttpSubError';
import {HttpErrorResponse} from '@angular/common/http';
import {HttpError} from '../../models/HttpError/HttpError';
import {Injectable} from '@angular/core';

/**
 * Implementation of {@link HttpErrorResponse}.
 */
@Injectable({
  providedIn: 'root'
})
export class HttpErrorService implements IHttpErrorService {

  /**
   * Constructor.
   */
  constructor() {
  }

  /**
   * Refers to {@link IHttpErrorService}
   * @param error
   * @returns HttpError
   */
  handleError(error: HttpErrorResponse): HttpError {
    if (error.error.statusError) {
      const httpError: HttpError = HttpError.parseTo(error);
      httpError.subErrors = this.generateSubErrors(error.error);
      return httpError;
    } else {
      return new HttpError(
        error.status,
        error.statusText,
        new Date().toLocaleString(),
        error.message,
        error.name + '/' + error.message
      );
    }
  }

  /**
   * Check and determine the type of specified error and generate his sub errors (if existing).
   * @param error Error that will be translated.
   * @returns HttpSubError[] Generated sub error from the specified error.
   */
  private generateSubErrors(error: any): HttpSubError[] {
    if (error.subErrors && error.subErrors.length > 0) {
      if ((error.subErrors[0] as any).field) {
        return this.generateValidationError(error);
      }
    }

    return null;
  }

  /**
   * Generate sub errors for validation error.
   * @param error A HttpError.
   * @returns HttpValidationError[] Generated validation sub errors.
   */
  private generateValidationError(error: HttpError): HttpValidationError[] {
    const errors: HttpValidationError[] = [];
    error.subErrors.forEach(value => {
      errors.push(HttpValidationError.parseTo(value));
    });
    return errors;
  }
}
