import { Employee } from './employee';
import { Relationship } from './relationship';

/**
 * Models an Employee Relationship
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class EmployeeRelationship
 */
export class EmployeeRelationship {
    public constructor(
        public id: number,
        public reference: Employee,
        public relationship: Relationship,
        public startDate: string,
        public endDate: string
    ) { }
}
