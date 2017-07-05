import { Component, OnInit } from '@angular/core';

import { Appraisal } from '../../model/appraisal/appraisal';

/**
 * Show a list of Appraisals for the logged in user.
 * @author Rubén Jiménez
 * @export
 * @class NameComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-appraisal-summary',
    templateUrl: 'appraisal-summary.component.html',
    styleUrls: [
        './appraisal-summary.component.scss'
    ]
})
export class AppraisalSummaryComponent implements OnInit {

    private appraisals: Appraisal[];

    constructor() {
        this.appraisals = [];
    }

    ngOnInit() { }
}
