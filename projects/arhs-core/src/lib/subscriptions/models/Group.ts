import {IEntityModel} from '../../shared/models/HttpResponse/IEntityModel';
import {HypermediaLinks} from '../../shared/models/HttpResponse/HypermediaLinks';

/**
 * Represent an association group.
 * Implement {@IEntityModel}.
 */
export class Group implements IEntityModel {

  /**
   * ID of the group.
   */
  id: number;
  /**
   * ID of the association that contains the group.
   */
  associationId: number;
  /**
   * Name of the group
   */
  name: string;
  /**
   * Description of the group.
   */
  description: string;
  /**
   * Refers to {@link IEntityModel}.
   */
  _links: HypermediaLinks;

  /**
   * Constructor.
   * @param associationId ID of the association containing the group.
   * @param name Name of the group.
   * @param description An optional description for the group.
   * @param id ID of the group.
   */
  constructor(associationId: number, name: string, description: string, id: number = null) {
    this.associationId = associationId;
    this.name = name;
    this.description = description;
    this.id = id;
  }

  /**
   * Refers to {@link IEntityModel}.
   */
  toJson(): string {
    return JSON.stringify(this);
  }
}
