import {CollectionModel} from '../../shared/models/HttpResponse/CollectionModel';
import {Observable} from 'rxjs';
import {Group} from '../models/Group';

export interface IGroupService {

    getAllGroups(): Observable<CollectionModel<Group>>;
    getGroupById(id: number): Observable<Group>;
    getGroupByName(name: String): Observable<Group>;
    createGroup(name: String, assoId: number, description?: String): Observable<Group>;
    deleteGroup(id: number): Observable<boolean>;
}
