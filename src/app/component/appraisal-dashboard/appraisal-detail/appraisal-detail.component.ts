import { Component, OnInit, Input } from '@angular/core';

import { Appraisal } from '../../../model/appraisal/appraisal';
import { AppraisalService } from '../../../service/appraisal.service';

/**
 * Show a list of Appraisals for the logged in user.
 * @author Rubén Jiménez
 * @author Manuel Yepez
 * @export
 * @class AppraisalSummaryComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-appraisal-detail',
    templateUrl: 'appraisal-detail.component.html',
    styleUrls: [
        './appraisal-detail.component.scss'
    ]
})
export class AppraisalDetailComponent implements OnInit {

    @Input()
    public appraisal: Appraisal;

    public ngOnInit(): void {

    }
}
