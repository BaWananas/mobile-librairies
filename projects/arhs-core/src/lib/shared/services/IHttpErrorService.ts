import {HttpErrorResponse} from '@angular/common/http';
import {HttpError} from '../models/HttpError/HttpError';

export interface IHttpErrorService {
    handleError(error: HttpErrorResponse): HttpError;
}
