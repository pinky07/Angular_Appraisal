import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EvaluationForm } from '../../../core/model/backend/evaluation-form';
import { AppraisalService } from '../../../core/service/appraisal.service';

@Component({
    selector: 'app-evaluation-form-view',
    templateUrl: './evaluation-form-view.component.html',
    styleUrls: [
        './evaluation-form-view.component.scss'
    ]
})
export class EvaluationFormViewComponent implements OnInit, OnDestroy {

    public evaluationForm: EvaluationForm;

    public constructor(
        private route: ActivatedRoute,
        private appraisalService: AppraisalService
    ) { }

    public ngOnInit(): void {
        this.route.params.subscribe(params => {
            const employeeId = +params['employeeId'];
            const appraisalId = +params['appraisalId'];
            const formId = +params['formId'];
            this.getForm(employeeId, appraisalId, formId);
        });
    }

    public getForm(employeeId: number, appraisalId: number, formId: number) {
        this.appraisalService.getEmployeesByIdAppraisalsByIdFormsById(employeeId, appraisalId, formId)
            .subscribe(evaluationForm => {
                // console.log(evaluationForm);
                this.evaluationForm = evaluationForm;
            });
    }

    public ngOnDestroy(): void {
    }
}
