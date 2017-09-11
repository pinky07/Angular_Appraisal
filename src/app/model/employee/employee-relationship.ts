import {Employee} from './employee';
import {RelationshipType} from './relationshipType';

/**
 * Models an Employee Relationship
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class EmployeeRelationship
 */
export class EmployeeRelationship {

    public constructor(
        public referred: Employee,
        public relationshipType: RelationshipType,
        public id?: number,
        public startDate?: Date,
        public endDate?: Date
    ) { }
}
