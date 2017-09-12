import { Section } from './section';
import { Question } from './question';
import { ScoreType } from './score-type';

/**
 * Models a EvaluationForm
 * @author Rubén Jiménez
 * @export
 * @class EvaluationForm
 */
export class EvaluationForm {
    public constructor(
        public id: number,
        public name: string,
        public description: string,
        public sections: Section[],
    ) { }
}
