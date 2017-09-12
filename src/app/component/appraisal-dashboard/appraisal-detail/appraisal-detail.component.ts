import { EmployeeEvaluationForm } from '../../../model/backend/employee-evaluation-form';
import { Component, Input, OnInit } from '@angular/core';

import { Appraisal } from '../../../model/backend/appraisal';
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

    public employeeEvaluationForms: EmployeeEvaluationForm[];

    /**
     * Creates an instance of AppraisalDetailComponent.
     * @param {AppraisalService} appraisalService Appraisal service
     * @memberof AppraisalDetailComponent
     */
    public constructor(
        private appraisalService: AppraisalService
    ) { }

    public ngOnInit(): void {
        this.appraisalService.getMeAppraisalsByIdForms(this.appraisal.id)
        .subscribe(employeeEvaluationForms => this.employeeEvaluationForms = employeeEvaluationForms);
    }
}
