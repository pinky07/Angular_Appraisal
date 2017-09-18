import {
  EvaluationFormViewComponent,
} from './component/appraisal-dashboard/evaluation-form-view/evaluation-form-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AppraisalDashboardComponent } from './component/appraisal-dashboard/appraisal-dashboard.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { MentoringDashboardComponent } from './component/mentoring-dashboard/mentoring-dashboard.component';
import { ErrorComponent } from './component/shared/error/error.component';
import { LoginCallbackComponent } from './component/shared/login-callback/login-callback.component';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { AdminDashboardGuard } from './guard/admin-dashboard.guard';
import { AppraisalDashboardGuard } from './guard/appraisal-dashboard.guard';
import { MentoringDashboardGuard } from './guard/mentoring-dashboard.guard';
import { SilentLoginGuard } from './guard/silent-login-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/employeeDashboard', pathMatch: 'full' },
  { path: 'callback', component: LoginCallbackComponent },

  // All paths below must have the SilentLoginGuard!
  {
    path: 'error',
    component: ErrorComponent,
    canLoad: [SilentLoginGuard]
  },
  {
    path: 'employeeDashboard',
    component: EmployeeDashboardComponent,
    canLoad: [SilentLoginGuard]
  },
  {
    path: 'mentoringDashboard',
    component: MentoringDashboardComponent,
    canLoad: [SilentLoginGuard, MentoringDashboardGuard]
  },
  {
    path: 'appraisalDashboard',
    component: AppraisalDashboardComponent,
    canLoad: [SilentLoginGuard, AppraisalDashboardGuard]
  },
  {
    path: 'employees/:employeeId/appraisals/:appraisalId/forms/:formId',
    component: EvaluationFormViewComponent,
    canLoad: [SilentLoginGuard, AppraisalDashboardGuard]
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
    canLoad: [SilentLoginGuard, AdminDashboardGuard]
  },

  // Default page
  { path: '**', component: PageNotFoundComponent, canLoad: [SilentLoginGuard] }
];

/**
 * Module that holds all the application routes.
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
