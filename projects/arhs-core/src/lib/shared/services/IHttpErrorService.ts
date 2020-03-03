import {HttpErrorResponse} from '@angular/common/http';
import {HttpError} from '../models/HttpError/HttpError';

/**
 * Interface representing HttpErrorService used to translate native in custom errors.
 */
export interface IHttpErrorService {
  /**
   * Translate an angular {@link HttpErrorResponse} into a custom {@link HttpError}.
   * @param error Angular error.
   * @returns HttpError Translated error.
   */
  handleError(error: HttpErrorResponse): HttpError;
}
