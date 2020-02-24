import {Injectable} from '@angular/core';
import {CollectionModel} from '../../../shared/models/HttpResponse/CollectionModel';
import {ISubscriptionService} from '../ISubscriptionService';
import {GroupService} from './group.service';
import {Observable, of} from 'rxjs';
import {Subscription} from '../../models/Subscription';
import {HttpService} from '../../../shared/services/implementations/http-service.service';
import {ApiServices} from '../../../shared/models/ApiServices';
import {ILoggerService} from '../../../shared/services/ILoggerService';
import {LoggerService} from '../../../shared/services/implementations/logger.service';
import {IHttpErrorService} from '../../../shared/services/IHttpErrorService';
import {HttpErrorService} from '../../../shared/services/implementations/http-error.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService implements ISubscriptionService {

  public static resourcePath = 'subscriptions';
  private logger: ILoggerService;
  private errorService: IHttpErrorService;

  constructor(private http: HttpService,
              loggerService: LoggerService,
              errorService: HttpErrorService) {
    this.logger = loggerService;
    this.errorService = errorService;
  }

  getAllSubscriptions(): Observable<CollectionModel<Subscription>> {
    return this.http.get<CollectionModel<Subscription>>(SubscriptionService.resourcePath, ApiServices.SUBSCRIPTIONS);
  }

  getSubscriptionById(id: number): Observable<Subscription> {
    return this.http.get<Subscription>(SubscriptionService.resourcePath + '/' + id, ApiServices.SUBSCRIPTIONS);
  }

  getSubscriptionsByGroupId(id: number): Observable<CollectionModel<Subscription>> {
    return this.http.get<CollectionModel<Subscription>>(GroupService.resourcePath + '/' + id + '/subscriptions', ApiServices.SUBSCRIPTIONS);
  }

  getSubscriptionsByUserId(id: number): Observable<CollectionModel<Subscription>> {
    return this.http.get<CollectionModel<Subscription>>(
      SubscriptionService.resourcePath + '/search/byuserid/' + id,
      ApiServices.SUBSCRIPTIONS);
  }

  subscribe(groupId: number, userId: number): Observable<Subscription> {
    return this.http.post<Subscription>(
      SubscriptionService.resourcePath,
      new Subscription(groupId, userId).toJson(),
      ApiServices.SUBSCRIPTIONS);
  }

  unsubscribe(subscriptionId: number): Observable<boolean> {
    return this.http.delete<boolean>(SubscriptionService.resourcePath + '/' + subscriptionId, ApiServices.SUBSCRIPTIONS);
  }

  isSubscribedToGroup(groupId: number, userId: number): Observable<boolean> {
    return new Observable<boolean>(subscriber => {

      this.getSubscriptionsByUserId(userId).subscribe((value) => {
        let isSubscribed = false;
        value._embedded.items.forEach((value1) => {
          if (value1.groupId === groupId) {
            isSubscribed = true;
          }
          return;
        });
        subscriber.next(isSubscribed);
        subscriber.complete();
      }, error => {
        subscriber.error(error);
      });
    });

  }

  unsubscribeToGroup(groupId: number, userId: number): Observable<boolean> {
    return new Observable<boolean>(subscriber => {

      this.getSubscriptionsByUserId(userId).subscribe(value => {
        let subscription: Subscription;

        value._embedded.items.forEach(value1 => {
          if (value1.groupId === groupId) {
            subscription = value1;
          }
        });

        if (subscription) {
          this.unsubscribe(subscription.id).subscribe((value2) => {
            subscriber.next(value2);
            subscriber.complete();
          }, error => {
            subscriber.error(error);
          });
        } else {
          subscriber.next(false);
          subscriber.complete();
        }
      }, error => {
        subscriber.error(error);
      });

    });
  }
}
