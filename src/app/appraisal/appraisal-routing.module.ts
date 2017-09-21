import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SilentLoginGuard } from '../core/guard/silent-login-guard.service';
import { AppraisalDashboardComponent } from './component/appraisal-dashboard/appraisal-dashboard.component';
import { EvaluationFormViewComponent } from './component/evaluation-form-view/evaluation-form-view.component';

const routes: Routes = [
    {
        path: '',
        component: AppraisalDashboardComponent,
        canActivate: [SilentLoginGuard],
    },
    {
        path: 'employees/:employeeId/appraisals/:appraisalId/forms/:formId',
        component: EvaluationFormViewComponent,
        canActivate: [SilentLoginGuard],
    },
];

/**
 * Holds Appraisal Module routes
 * @author Ruben Jimenez
 * @export
 * @class AppraisalRoutingModule
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppraisalRoutingModule { }
