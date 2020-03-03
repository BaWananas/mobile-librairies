import {IEntityModel} from '../../shared/models/HttpResponse/IEntityModel';
import {HypermediaLinks} from '../../shared/models/HttpResponse/HypermediaLinks';

/**
 * Represent a subscription.
 * Implement {@link IEntityModel}.
 */
export class Subscription implements IEntityModel {

  /**
   * ID of the subscription.
   */
  public id: number;
  /**
   * ID of the subscribed group.
   */
  public groupId: number;
  /**
   * ID of the subscribed user.
   */
  public userId: number;
  /**
   * Links to the resources, refers to {@link IEntityModel}.
   */
  _links: HypermediaLinks;

  /**
   * Constructor.
   * @param groupId ID of the group.
   * @param userId ID of the user.
   * @param id ID of the subscription.
   */
  constructor(groupId: number, userId: number, id: number = null) {
    this.id = id;
    this.groupId = groupId;
    this.userId = userId;
  }

  /**
   * Refers to {@link IEntityModel}
   */
  toJson(): string {
    return JSON.stringify(this);
  }
}
