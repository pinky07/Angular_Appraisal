import { Question } from './question';
import { ScoreType } from './score-type';

/**
 * Models a Section
 * @author Rubén Jiménez
 * @export
 * @class Section
 */
export class Section {
    public constructor(
        public id: number,
        public name: string,
        public description: string,
        public position: number,
        public questions: Question[],
        public scoreType: ScoreType
    ) { }
}
