import {Observable} from 'rxjs';
import {CollectionModel} from '../../shared/models/HttpResponse/CollectionModel';
import {Subscription} from '../models/Subscription';

/**
 * Interface describing a SubscriptionService used to manage operation on subscriptions.
 */
export interface ISubscriptionService {
  /**
   * Retrieve all the existing subscriptions.
   * @returns Observable<CollectionModel<Subscription>> Observable value of the subscription collection (including links to each group).
   */
  getAllSubscriptions(): Observable<CollectionModel<Subscription>>;

  /**
   * Get a single subscription by his ID.
   * @param id Id of the subscription.
   * @returns Observable<Subscription> Observable value of the subscription (including links).
   */
  getSubscriptionById(id: number): Observable<Subscription>;

  /**
   * Retrieve all subscriptions of an user by his user ID.
   * @param id Id of the user.
   * @returns Observable<CollectionModel<Subscription>> Observable value of the subscriptions collection (including links).
   */
  getSubscriptionsByUserId(id: number): Observable<CollectionModel<Subscription>>;

  /**
   * Retrieve all subscriptions of a group by his ID.
   * @param id ID of the group.
   * @returns Observable<CollectionModel<Subscription>> Observable value of the subscriptions collection (including links).
   */
  getSubscriptionsByGroupId(id: number): Observable<CollectionModel<Subscription>>;

  /**
   * Is the user was subscribed to specified group ?
   * @param groupId ID of the group.
   * @param userId ID of the user.
   * @returns Observable<boolean> Observable value of a boolean : true if subscribed to the group, false if not.
   */
  isSubscribedToGroup(groupId: number, userId: number): Observable<boolean>;

  /**
   * Subscribe to a group.
   * @param groupId Id of the group which the user want to subscribe.
   * @param userId Id of the user that want to subscribe.
   * @returns Observable<Subscription> Observable value of the newly created subscription (including links).
   */
  subscribe(groupId: number, userId: number): Observable<Subscription>;

  /**
   * Unsubscribe to a group by the ID of the subscription. (exactly correspond to DELETE operation on subscription resource).
   * @param subscriptionId Id of the subscription.
   * @returns Observable<boolean> Observable value of a boolean : true if unsubscribed to the group, false if something wrong happened.
   */
  unsubscribe(subscriptionId: number): Observable<boolean>;

  /**
   * Unsubscribe to a group by specify the ID of the user and of the group.
   * @param groupId ID of the group.
   * @param userId ID of the user.
   * @returns Observable<boolean> Observable value of a boolean : true if unsubscribed to the group, false if something wrong happened.
   */
  unsubscribeToGroup(groupId: number, userId: number): Observable<boolean>;
}
