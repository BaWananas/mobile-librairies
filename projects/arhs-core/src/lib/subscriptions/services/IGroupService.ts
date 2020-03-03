import {CollectionModel} from '../../shared/models/HttpResponse/CollectionModel';
import {Observable} from 'rxjs';
import {Group} from '../models/Group';

/**
 * Interface describing a GroupService used to manage operation on groups.
 */
export interface IGroupService {
  /**
   * Retrieve all the existing groups.
   * @returns Observable<CollectionModel<Group>> Observable value of the groups collection (including links for each group).
   */
  getAllGroups(): Observable<CollectionModel<Group>>;

  /**
   * Get a single group by his ID.
   * @returns Observable<Group> Observable value pf the group (including links for this group).
   * @param id The ID of the group.
   */
  getGroupById(id: number): Observable<Group>;

  /**
   * Get a single group by his name.
   * @returns Observable<Group> Observable value pf the group (including links for this group).
   * @param name The name of the group (Case sensitive).
   */
  getGroupByName(name: string): Observable<Group>;

  /**
   * Create a group.
   * @param name Name of the group.
   * @param associationId Association ID of the group.
   * @param description An optional description of the group.
   * @returns Observable<Group> Observable value of the newly created group (including links).
   */
  createGroup(name: string, associationId: number, description?: string): Observable<Group>;

  /**
   * Delete a group.
   * @returns Observable<boolean> Observable value of a boolean : true if successfully deleted, false if something wrong happened.
   * @param id The ID of the group.
   */
  deleteGroup(id: number): Observable<boolean>;
}
