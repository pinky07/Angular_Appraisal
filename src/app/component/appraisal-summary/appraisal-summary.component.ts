import { CollapsableCard } from '../../layout/collapsable-card/collapsable-card';
import { Appraisal } from '../../model/appraisal/appraisal';

import { Component, OnInit } from '@angular/core';

/**
 * Show a list of Appraisals for the logged in user.
 * @export
 * @class NameComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-appraisal-summary',
    templateUrl: 'appraisal-summary.component.html',
    styleUrls: [
        '../../layout/collapsable-card/collapsable-card.scss',
        './appraisal-summary.component.scss'
    ]
})
export class AppraisalSummaryComponent extends CollapsableCard implements OnInit {

    private appraisals: Appraisal[];

    constructor() {
        super();
        this.appraisals = [];
    }

    ngOnInit() { }
}
