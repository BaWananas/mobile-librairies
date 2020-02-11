import {Injectable} from '@angular/core';
import {CollectionModel} from '../../../shared/models/HttpResponse/CollectionModel';
import {HttpService} from '../../../shared/services/implementations/http.service';
import {IGroupService} from '../IGroupService';
import {Observable} from 'rxjs';
import {Group} from '../../models/Group';

@Injectable({
  providedIn: 'root'
})
export class GroupService implements IGroupService {

  public static resourcePath = 'groups';

  constructor(private http: HttpService) {}

  createGroup(name: string, assoId: number, description?: string): Observable<Group> {
    return this.http.post<Group>(GroupService.resourcePath, new Group(assoId, name, description).toJson());
  }

  deleteGroup(id: number): Observable<boolean> {
    return this.http.delete<boolean>(GroupService.resourcePath + '/' + id);
  }

  getAllGroups(): Observable<CollectionModel<Group>> {
    return this.http.get<CollectionModel<Group>>(GroupService.resourcePath);
  }

  getGroupById(id: number): Observable<Group> {
    return this.http.get<Group>(GroupService.resourcePath + '/' + id);
  }

  // TODO
  getGroupByName(name: string): Observable<Group> {
    return this.http.get<Group>(GroupService.resourcePath + '/' + name);
  }
}
