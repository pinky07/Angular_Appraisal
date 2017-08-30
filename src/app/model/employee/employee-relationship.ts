import {Employee} from './employee';
import {Relationship} from './relationship';

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
        public relationship: Relationship,
        public id?: number,
        public startDate?: Date,
        public endDate?: Date
    ) { }
}
