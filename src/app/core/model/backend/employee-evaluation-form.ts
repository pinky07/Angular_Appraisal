import { Employee } from './employee';

/**
 * Models an EmployeeEvaluationForm
 * @author Rubén Jiménez Goñi
 * @export
 * @class Relationship
 */
export class EmployeeEvaluationForm {
    public constructor(
        public id: number,
        public employee: Employee,
        public filledByEmployee: Employee,
        public mentor: Employee,
        public createDate: Date,
        public submitDate: Date,
        public evaluationFormId: number,
    ) { }
}
