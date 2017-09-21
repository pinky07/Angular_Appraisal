import { ScoreValue } from './score-value';

/**
 * Models a ScoreType
 * @author Rubén Jiménez
 * @export
 * @class ScoreType
 */
export class ScoreType {
    public constructor(
        public id: number,
        public definition: string,
        public scoreValues: ScoreValue[],
    ) { }
}
