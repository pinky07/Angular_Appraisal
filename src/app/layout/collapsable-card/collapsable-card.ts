
/**
 * Abstract the required behaviour from a Collapsable Card
 * @export
 * @class CollapsableCard
 */
export class CollapsableCard {

    // Collapse sign current class. Can be either 'fa-plus' or 'fa-minus'
    collapseSign: string;

    constructor() {
        this.collapseSign = 'fa-minus';
    }

    /**
     * Changes the collapse sign from plus to minus and viceversa.
     * Use every time the collapse changes from showing to hiding and viceversa.
     * @memberof CollapsableCard
     */
    public changeCollapseSign(): void {
        if (this.collapseSign === 'fa-plus') {
            this.collapseSign = 'fa-minus';
        } else {
            this.collapseSign = 'fa-plus';
        }
    }
}
