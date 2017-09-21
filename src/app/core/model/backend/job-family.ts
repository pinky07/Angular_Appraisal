/**
 * Models a Job Family
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class JobFamily
 */
export class JobFamily {
    public constructor(
        public id: number,
        public name: string,
        public description: string
    ) { }
}
