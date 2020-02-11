import {IEntityModel} from './IEntityModel';
import {HypermediaLinks} from './HypermediaLinks';

export class CollectionModel<T extends IEntityModel> {
    public _embedded: {
        items: T[];
    };
    public _links: HypermediaLinks;
}
