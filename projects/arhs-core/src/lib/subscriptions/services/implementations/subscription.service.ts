import {Injectable} from '@angular/core';
import {CollectionModel} from '../../../shared/models/HttpResponse/CollectionModel';
import {ISubscriptionService} from '../ISubscriptionService';
import {GroupService} from './group.service';
import {Observable} from 'rxjs';
import {Subscription} from '../../models/Subscription';
import {HttpService} from '../../../shared/services/implementations/http-service.service';
import {ApiServices} from '../../../shared/models/ApiServices';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService implements ISubscriptionService {

  public static resourcePath = 'subscriptions';

  constructor(private http: HttpService) { }

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
    return this.http.get<CollectionModel<Subscription>>(SubscriptionService.resourcePath + '/search/byuserid/' + id, ApiServices.SUBSCRIPTIONS);
  }

  subscribe(groupId: number, userId: number): Observable<Subscription> {
    return this.http.post<Subscription>(SubscriptionService.resourcePath, new Subscription(groupId, userId).toJson(), ApiServices.SUBSCRIPTIONS);
  }

  unsubscribe(id: number): Observable<boolean> {
    return this.http.delete<boolean>(SubscriptionService.resourcePath + '/' + id, ApiServices.SUBSCRIPTIONS);
  }
}
