/**
 * Models an Appraisal
 * @author Ruben Jimenez
 * @export
 * @class Alert
 */
export class Appraisal {
    public constructor(
        public id: number,
        public name: string,
        public description: string,
        public startDate: Date,
        public endDate: Date
    ) { }
}
