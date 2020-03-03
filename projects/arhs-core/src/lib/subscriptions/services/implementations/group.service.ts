import {Injectable} from '@angular/core';
import {CollectionModel} from '../../../shared/models/HttpResponse/CollectionModel';
import {IGroupService} from '../IGroupService';
import {Observable} from 'rxjs';
import {Group} from '../../models/Group';
import {HttpService} from '../../../shared/services/implementations/http-service.service';
import {ApiServices} from '../../../shared/models/ApiServices';

/**
 * Implementation of {@link IGroupService}.
 */
@Injectable({
  providedIn: 'root'
})
export class GroupService implements IGroupService {

  /**
   * Url of the available resource. (excluding the url of the API)
   */
  public static resourcePath = 'groups';

  /**
   * Refers to {@link IGroupService}
   * @param http HttpService used to HTTP CRUD operations. Refers to {@link IHttpService}
   */
  constructor(private http: HttpService) {
  }

  /**
   * Refers to {@link IGroupService}
   * @param name
   * @param associationId
   * @param description
   */
  createGroup(name: string, associationId: number, description?: string): Observable<Group> {
    return this.http.post<Group>(
      GroupService.resourcePath,
      new Group(associationId, name, description).toJson(),
      ApiServices.SUBSCRIPTIONS);
  }

  /**
   * Refers to {@link IGroupService}
   * @param id
   */
  deleteGroup(id: number): Observable<boolean> {
    return this.http.delete<boolean>(GroupService.resourcePath + '/' + id, ApiServices.SUBSCRIPTIONS);
  }

  /**
   * Refers to {@link IGroupService}
   */
  getAllGroups(): Observable<CollectionModel<Group>> {
    return this.http.get<CollectionModel<Group>>(GroupService.resourcePath, ApiServices.SUBSCRIPTIONS);
  }

  /**
   * Refers to {@link IGroupService}
   * @param id
   */
  getGroupById(id: number): Observable<Group> {
    return this.http.get<Group>(GroupService.resourcePath + '/' + id, ApiServices.SUBSCRIPTIONS);
  }

  /**
   * Refers to {@link IGroupService}
   * TODO
   * @param name
   */
  getGroupByName(name: string): Observable<Group> {
    return this.http.get<Group>(GroupService.resourcePath + '/' + name, ApiServices.SUBSCRIPTIONS);
  }
}
