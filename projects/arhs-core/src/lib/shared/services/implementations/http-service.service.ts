import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IHttpService} from '../IHttpService';
import {ILoggerService} from '../ILoggerService';
import {LoggerService} from './logger.service';
import {ApiServices} from '../../models/ApiServices';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttpService {

  private loggerService: ILoggerService;

  constructor(private httpClient: HttpClient, loggerService: LoggerService) {
    this.loggerService = loggerService;
  }

  public token: string = null;
  public rootUrl: string = null;
  public headers: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + this.token,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  });

  delete<T>(resource: string, api: ApiServices, customHeaders?: HttpHeaders): Observable<T> {
    let obs: Observable<T>;
    this.discoverApiUrl(api).subscribe(value => {
      if (value != null) {
        obs = this.httpClient.delete<T>(value.url + resource, {headers: customHeaders ? customHeaders : this.headers});
      }
    });

    return obs;
  }

  get<T>(resource: string, api: ApiServices, customHeaders?: HttpHeaders): Observable<T> {
    let obs: Observable<T>;
    this.discoverApiUrl(api).subscribe(value => {
      if (value != null) {
        obs = this.httpClient.get<T>(value.url + resource, {headers: customHeaders ? customHeaders : this.headers});
      }
    });

    return obs;
  }

  post<T>(resource: string, body: any, api: ApiServices, customHeaders?: HttpHeaders): Observable<T> {
    let obs: Observable<T>;
    this.discoverApiUrl(api).subscribe(value => {
      if (value != null) {
        obs = this.httpClient.post<T>(value.url + resource, {headers: customHeaders ? customHeaders : this.headers});
      }
    });

    return obs;
  }

  put<T>(resource: string, body: any, api: ApiServices, customHeaders?: HttpHeaders): Observable<T> {
    let obs: Observable<T>;
    this.discoverApiUrl(api).subscribe(value => {
      if (value != null) {
        obs = this.httpClient.put<T>(value.url + resource, {headers: customHeaders ? customHeaders : this.headers});
      }
    });

    return obs;
  }

  auth<T>(): Observable<T> {
    let obs: Observable<T>;
    this.discoverApiUrl(ApiServices.AUTHENTICATION_API).subscribe((value: any) => {
      obs = this.get<T>(value.url, ApiServices.AUTHENTICATION_API);

      // TODO
      obs.subscribe(authResponse => {
        console.log(JSON.stringify(authResponse));
      }, error => {
        this.token = null;
      });
    });

    return obs;
  }

  discoverApiUrl(api: ApiServices): Observable<any> {
    if (this.rootUrl == null) {
      const e: Error = new Error('Discovery url nor initialized.');
      this.loggerService.error(this, e.message);
      throw e;
    }

    /* In a real case.
    return this.get<any>(this.apiDiscoveryUrl, ApiServices.DISCOVERY_API).pipe(
      catchError((err, caught) => {
        this.loggerService.error(this, 'Error occurred during retrieving url from API discovery.');
        return of(null);
      })
    );
     */
    return of({
      url: this.rootUrl
    });
  }
}
