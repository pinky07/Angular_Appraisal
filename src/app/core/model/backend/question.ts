
/**
 * Models a Question
 * @author Rubén Jiménez
 * @export
 * @class Question
 */
export class Question {
    public constructor(
        public id: number,
        public name: string,
        public description: string,
        public position: number
    ) { }
}
