import {IEntityModel} from './IEntityModel';
import {HypermediaLinks} from './HypermediaLinks';

/**
 * Represent a collection of entities.
 * Include links to the entities.
 */
export class CollectionModel<T extends IEntityModel> {
  /**
   * Container of the entities.
   */
  public _embedded: {
    /**
     * The entities.
     */
    items: T[];
  };
  /**
   * Links to the entities.
   */
  public _links: HypermediaLinks;
}
