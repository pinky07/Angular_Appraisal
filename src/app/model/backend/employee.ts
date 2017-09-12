import { JobLevel } from './job-level';
import { ApplicationRole } from './application-role';
import { EmployeeRelationship } from './employee-relationship';

/**
 * Models an Employee
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class Employee
 */
export class Employee {
    public constructor(
        public id: number,
        public email: string,
        public firstName: string,
        public lastName: string,
        public gftIdentifier: string,
        public isAdmin: boolean,
        public isMentor: boolean,
        public isPeer: boolean,
        public applicationRole: ApplicationRole,
        public jobLevel: JobLevel
    ) { }
}
