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
        public peerId: number,
        public employeeId: number,
        public startDate: string,
        public endDate: string,
        public relationship: Relationship
    ) { }
}
