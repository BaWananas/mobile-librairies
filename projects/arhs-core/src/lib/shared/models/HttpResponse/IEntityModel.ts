import {HypermediaLinks} from './HypermediaLinks';

export interface IEntityModel {
    _links: HypermediaLinks;
    toJson(): string;
}
