import {Component, OnInit} from '@angular/core';

import {Appraisal} from '../../../model/appraisal/appraisal';
import {AppraisalService} from '../../../service/appraisal.service';

/**
 * Show a list of Appraisals for the logged in user.
 * @author Rubén Jiménez
 * @author Manuel Yepez
 * @export
 * @class AppraisalSummaryComponent
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

    public appraisals: Appraisal[];

    constructor(
      private appraisalService: AppraisalService
    ) { }

    ngOnInit() {
      this.appraisalService.getMeAppraisals()
        .subscribe(appraisals => this.appraisals = appraisals);
    }
}
