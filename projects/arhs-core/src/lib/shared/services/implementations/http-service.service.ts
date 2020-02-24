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
    return new Observable<T>(subscriber => {
      this.discoverApiUrl(api).subscribe(value => {
        if (value != null) {
          this.httpClient.delete<T>(value.url + resource, {headers: customHeaders ? customHeaders : this.headers}).subscribe(value1 => {
            subscriber.next(value1);
            subscriber.complete();
          }, error => {
            subscriber.error(error);
          });
        }
      }, error => {
        subscriber.error(error);
      });
    });
  }

  get<T>(resource: string, api: ApiServices, customHeaders?: HttpHeaders): Observable<T> {
    return new Observable<T>(subscriber => {
      this.discoverApiUrl(api).subscribe(value => {
        if (value != null) {
          this.httpClient.get<T>(value.url + resource, {headers: customHeaders ? customHeaders : this.headers}).subscribe(value1 => {
            subscriber.next(value1);
            subscriber.complete();
          }, error => {
            subscriber.error(error);
          });
        }
      }, error => {
        subscriber.error(error);
      });
    });
  }

  post<T>(resource: string, body: any, api: ApiServices, customHeaders?: HttpHeaders): Observable<T> {
    return new Observable<T>(subscriber => {
      this.discoverApiUrl(api).subscribe(value => {
        if (value != null) {
          this.httpClient.post<T>(value.url + resource, {headers: customHeaders ? customHeaders : this.headers}).subscribe(value1 => {
            subscriber.next(value1);
            subscriber.complete();
          }, error => {
            subscriber.error(error);
          });
        }
      }, error => {
        subscriber.error(error);
      });
    });
  }

  put<T>(resource: string, body: any, api: ApiServices, customHeaders?: HttpHeaders): Observable<T> {
    return new Observable<T>(subscriber => {
      this.discoverApiUrl(api).subscribe(value => {
        if (value != null) {
          this.httpClient.put<T>(value.url + resource, {headers: customHeaders ? customHeaders : this.headers}).subscribe(value1 => {
            subscriber.next(value1);
            subscriber.complete();
          }, error => {
            subscriber.error(error);
          });
        }
      }, error => {
        subscriber.error(error);
      });
    });
  }

  auth<T>(): Observable<T> {
    return new Observable<T>(subscriber => {
      this.discoverApiUrl(ApiServices.AUTHENTICATION_API).subscribe((value: any) => {
        // TODO
        subscriber.next();
        subscriber.complete();
      }, error => {
        subscriber.error(error);
      });
    });
  }

  discoverApiUrl(api: ApiServices): Observable<any> {
    return new Observable<any>(subscriber => {
      if (this.rootUrl == null) {
        const e: Error = new Error('Discovery url nor initialized.');
        this.loggerService.error(this, e.message);
        subscriber.error(e);
        throw e;
      }

      // TODO
      /*
       * In a real case, this method call Discovery API to obtain url from specified api: ApiServices.
       */
      subscriber.next({url: this.rootUrl});
      subscriber.complete();
    });
  }
}
