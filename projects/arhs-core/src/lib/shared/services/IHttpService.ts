import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiServices} from '../models/ApiServices';

/**
 * Interface representing a HttpService used to execute basic CRUD operations.
 */
export interface IHttpService {
  /**
   * Root URL of the root API (e.g. discovering API).
   */
  rootUrl: string;
  /**
   * Default headers for operations.
   */
  headers: HttpHeaders;

  /**
   * TODO
   * @ignore
   */
  auth<T>(): Observable<T>;

  /**
   * POST operation.
   * @param resource Url for the resource (excluding url of the API).
   * @param api Api in charge of managing the resource.
   * @param customHeaders Optional redefinition of the headers. WARNING specify this one override default headers.
   * @returns Observable<T> Observable value of the requested resource.
   */
  get<T>(resource: string, api: ApiServices, customHeaders?: HttpHeaders): Observable<T>;

  /**
   * POST operation.
   * @param resource Url for the resource (excluding url of the API).
   * @param api Api in charge of managing the resource.
   * @param body Body included in the POST request.
   * @param customHeaders Optional redefinition of the headers. WARNING specify this one override default headers.
   * @returns Observable<T> Observable value of the requested resource.
   */
  post<T>(resource: string, api: ApiServices, body: any, customHeaders?: HttpHeaders): Observable<T>;

  /**
   * PUT operation.
   * @param resource Url for the resource (excluding url of the API).
   * @param api Api in charge of managing the resource.
   * @param body Body included in the POST request.
   * @param customHeaders Optional redefinition of the headers. WARNING specify this one override default headers.
   * @returns Observable<T> Observable value of the requested resource.
   */
  put<T>(resource: string, api: ApiServices, body: any, customHeaders?: HttpHeaders): Observable<T>;

  /**
   * DELETE operation.
   * @param resource Url for the resource (excluding url of the API).
   * @param api Api in charge of managing the resource.
   * @param customHeaders Optional redefinition of the headers. WARNING specify this one override default headers.
   * @returns Observable<T> Observable value of the requested resource.
   */
  delete<T>(resource: string, api: ApiServices, customHeaders?: HttpHeaders): Observable<T>;
}
