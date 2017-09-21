import { AppraisalRoutingModule } from './appraisal-routing.module';
import { SectionCommentComponent } from './component/section-comment/section-comment.component';
import { Section1To5Component } from './component/section-1-to-5/section-1-to-5.component';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppraisalDashboardComponent } from './component/appraisal-dashboard/appraisal-dashboard.component';
import { AppraisalDetailComponent } from './component/appraisal-detail/appraisal-detail.component';
import { EvaluationFormViewComponent } from './component/evaluation-form-view/evaluation-form-view.component';

/**
 * TODO Document this!
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class AppModule
 */
@NgModule({
    imports: [
        SharedModule,
        AppraisalRoutingModule,
    ],
    declarations: [
        AppraisalDashboardComponent,
        AppraisalDetailComponent,
        EvaluationFormViewComponent,
        Section1To5Component,
        SectionCommentComponent
    ],
    providers: [
    ]
})
export class AppraisalModule { }
