import { Injectable } from '@angular/core';
import {CollectionModel} from '../../../shared/models/HttpResponse/CollectionModel';
import {ISubscriptionService} from '../ISubscriptionService';
import {HttpService} from '../../../shared/services/implementations/http.service';
import {GroupService} from './group.service';
import {Observable} from 'rxjs';
import {Subscription} from '../../models/Subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService implements ISubscriptionService {

  public static resourcePath = 'subscriptions';

  constructor(private http: HttpService) { }

  getAllSubscriptions(): Observable<CollectionModel<Subscription>> {
    return this.http.get<CollectionModel<Subscription>>(SubscriptionService.resourcePath);
  }

  getSubscriptionById(id: number): Observable<Subscription> {
    return this.http.get<Subscription>(SubscriptionService.resourcePath + '/' + id);
  }

  getSubscriptionsByGroupId(id: number): Observable<CollectionModel<Subscription>> {
    return this.http.get<CollectionModel<Subscription>>(GroupService.resourcePath + '/' + id + '/subscriptions');
  }

  getSubscriptionsByUserId(id: number): Observable<CollectionModel<Subscription>> {
    return this.http.get<CollectionModel<Subscription>>(SubscriptionService.resourcePath + '/search/byuserid/' + id);
  }

  subscribe(groupId: number, userId: number): Observable<Subscription> {
    return this.http.post<Subscription>(SubscriptionService.resourcePath, new Subscription(groupId, userId).toJson());
  }

  unsubscribe(id: number): Observable<boolean> {
    return this.http.delete<boolean>(SubscriptionService.resourcePath + '/' + id);
  }
}
