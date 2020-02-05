export class Subscription {

    public id: number;
    public groupId: number;
    public userId: number;

    constructor(group: number, userId: number, id: number = null) {
        this.id = id;
        this.groupId = group;
        this.userId = userId;
    }
}
