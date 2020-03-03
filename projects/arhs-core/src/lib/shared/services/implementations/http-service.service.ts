import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IHttpService} from '../IHttpService';
import {ILoggerService} from '../ILoggerService';
import {LoggerService} from './logger.service';
import {ApiServices} from '../../models/ApiServices';

/**
 * Implementation of {@link IHttpService}.
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttpService {

  /**
   * @ignore
   */
  private loggerService: ILoggerService;

  /**
   * Constructor.
   * @param httpClient Native angular Http client.
   * @param loggerService Service used for logging.
   */
  constructor(private httpClient: HttpClient, loggerService: LoggerService) {
    this.loggerService = loggerService;
  }

  /**
   * Auth token. Not used for the moment (due to absence of authentication module).
   */
  public token: string = null;
  /**
   * URL of the root API.
   */
  public rootUrl: string = null;
  /**
   * Default headers for any request (if not overridden).
   */
  public headers: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + this.token,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  });

  /**
   * Refers to {@link IHttpService}.
   * @param resource
   * @param api
   * @param customHeaders
   */
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

  /**
   * Refers to {@link IHttpService}.
   * @param resource
   * @param api
   * @param customHeaders
   */
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

  /**
   * Refers to {@link IHttpService}.
   * @param resource
   * @param body
   * @param api
   * @param customHeaders
   */
  post<T>(resource: string, body: any, api: ApiServices, customHeaders?: HttpHeaders): Observable<T> {
    return new Observable<T>(subscriber => {
      this.discoverApiUrl(api).subscribe(value => {
        if (value != null) {
          this.httpClient.post<T>(value.url + resource, body, {headers: customHeaders ? customHeaders : this.headers}).subscribe(value1 => {
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

  /**
   * Refers to {@link IHttpService}.
   * @param resource
   * @param body
   * @param api
   * @param customHeaders
   */
  put<T>(resource: string, body: any, api: ApiServices, customHeaders?: HttpHeaders): Observable<T> {
    return new Observable<T>(subscriber => {
      this.discoverApiUrl(api).subscribe(value => {
        if (value != null) {
          this.httpClient.put<T>(value.url + resource, body, {headers: customHeaders ? customHeaders : this.headers}).subscribe(value1 => {
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

  /**
   * TODO
   * @ignore
   */
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

  /**
   * Retrieve the URL for the specified API.
   * Implementation of discovery API if we want it in the future.
   * @param api API.
   * @returns Observable<any> Observable value containing the URL of the API.
   */
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
