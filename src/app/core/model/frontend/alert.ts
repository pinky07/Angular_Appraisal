/**
 * Models an Alert
 * @author Ruben Jimenez
 * @export
 * @class Alert
 */
export class Alert {
    public constructor(
        public id: number,
        public type: string,
        public strong: string,
        public text: string
    ) { }
}
