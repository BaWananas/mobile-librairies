export class Group {

    id: number;
    associationId: number;
    name: string;
    description: string;

    constructor(associationId: number, name: string, description: string, id: number = null) {
        this.associationId = associationId;
        this.name = name;
        this.description = description;
        this.id = id;
    }
}
