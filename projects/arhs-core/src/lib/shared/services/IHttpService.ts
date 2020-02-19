import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiServices} from '../models/ApiServices';

export interface IHttpService {
    rootUrl: string;
    headers: HttpHeaders;

    auth<T>(): Observable<T>;
    get<T>(resource: string, api: ApiServices, customHeaders?: HttpHeaders): Observable<T>;
    post<T>(resource: string, api: ApiServices, body: any, customHeaders?: HttpHeaders): Observable<T>;
    put<T>(resource: string, api: ApiServices, body: any, customHeaders?: HttpHeaders): Observable<T>;
    delete<T>(resource: string, api: ApiServices, customHeaders?: HttpHeaders): Observable<T>;
}
