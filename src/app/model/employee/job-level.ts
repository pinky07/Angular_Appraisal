import { JobFamily } from './job-family';

/**
 * Models a Job Level
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class JobLevel
 */
export class JobLevel {
    public constructor(
        public id: number,
        public jobFamily: JobFamily,
        public name: string,
        public description: string,
        public expertise: string
    ) { }
}
