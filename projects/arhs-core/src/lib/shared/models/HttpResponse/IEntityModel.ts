import {HypermediaLinks} from './HypermediaLinks';

/**
 * Represent the HATEOAS part of an entity (links, ...)
 */
export interface IEntityModel {

  /**
   * Links of the entity.
   */
  _links: HypermediaLinks;

  /**
   * JSON method to JSONify the entity.
   * @returns string JSON representation of the entity.
   */
  toJson(): string;
}
