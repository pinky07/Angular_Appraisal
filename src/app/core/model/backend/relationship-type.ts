/**
 * Models a Relationship
 * @author Manuel Yepez
 * @export
 * @class Relationship
 */
export class RelationshipType {
    public constructor(
        public id: number,
        public name: string,
        public description: string,
    ) { }
}
