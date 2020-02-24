import {Observable} from 'rxjs';
import {CollectionModel} from '../../shared/models/HttpResponse/CollectionModel';
import {Subscription} from '../models/Subscription';

export interface ISubscriptionService {
    getAllSubscriptions(): Observable<CollectionModel<Subscription>>;
    getSubscriptionById(id: number): Observable<Subscription>;
    getSubscriptionsByUserId(id: number): Observable<CollectionModel<Subscription>>;
    getSubscriptionsByGroupId(id: number): Observable<CollectionModel<Subscription>>;
    isSubscribedToGroup(groupId: number, userId): Observable<boolean>;
    subscribe(groupId: number, userId: number): Observable<Subscription>;
    unsubscribe(subscriptionId: number): Observable<boolean>;
    unsubscribeToGroup(groupId: number, userId: number): Observable<boolean>;
}
