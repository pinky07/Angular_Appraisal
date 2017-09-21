/**
 * Models an Action Item
 * @author Ruben Jimenez
 * @export
 * @class Action Item
 */
export class ActionItem {
    public constructor(
        public id: number,
        public done: boolean,
        public category: string,
        public text: string,
        public url: string[]
    ) { }
}
