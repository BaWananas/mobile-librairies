import {Injectable} from '@angular/core';
import {CollectionModel} from '../../../shared/models/HttpResponse/CollectionModel';
import {IGroupService} from '../IGroupService';
import {Observable} from 'rxjs';
import {Group} from '../../models/Group';
import {HttpService} from '../../../shared/services/implementations/http-service.service';
import {ApiServices} from '../../../shared/models/ApiServices';

@Injectable({
  providedIn: 'root'
})
export class GroupService implements IGroupService {

  public static resourcePath = 'groups';

  constructor(private http: HttpService) {}

  createGroup(name: string, assoId: number, description?: string): Observable<Group> {
    return this.http.post<Group>(GroupService.resourcePath, new Group(assoId, name, description).toJson(), ApiServices.SUBSCRIPTIONS);
  }

  deleteGroup(id: number): Observable<boolean> {
    return this.http.delete<boolean>(GroupService.resourcePath + '/' + id, ApiServices.SUBSCRIPTIONS);
  }

  getAllGroups(): Observable<CollectionModel<Group>> {
    return this.http.get<CollectionModel<Group>>(GroupService.resourcePath, ApiServices.SUBSCRIPTIONS);
  }

  getGroupById(id: number): Observable<Group> {
    return this.http.get<Group>(GroupService.resourcePath + '/' + id, ApiServices.SUBSCRIPTIONS);
  }

  // TODO
  getGroupByName(name: string): Observable<Group> {
    return this.http.get<Group>(GroupService.resourcePath + '/' + name, ApiServices.SUBSCRIPTIONS);
  }
}
