import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppraisalDashboardComponent } from './component/appraisal-dashboard/appraisal-dashboard.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { MentoringDashboardComponent } from './component/mentoring-dashboard/mentoring-dashboard.component';
import { ErrorComponent } from './component/shared/error/error.component';
import { LoginCallbackComponent } from './component/shared/login-callback/login-callback.component';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { AppraisalDashboardGuard } from './guard/appraisal-dashboard.guard';
import { MentoringDashboardGuard } from './guard/mentoring-dashboard.guard';
import { SilentLoginGuard } from './guard/silent-login-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/employeeDashboard', pathMatch: 'full' },
  { path: 'callback', component: LoginCallbackComponent },

  // All paths below must have the SilentLoginGuard!
  { path: 'error', component: ErrorComponent, canActivate: [SilentLoginGuard] },
  { path: 'employeeDashboard', component: EmployeeDashboardComponent, canActivate: [SilentLoginGuard] },
  { path: 'mentoringDashboard', component: MentoringDashboardComponent, canActivate: [SilentLoginGuard, MentoringDashboardGuard] },
  { path: 'appraisalDashboard', component: AppraisalDashboardComponent, canActivate: [SilentLoginGuard, AppraisalDashboardGuard] },

  // Default page
  { path: '**', component: PageNotFoundComponent, canActivate: [SilentLoginGuard] }
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
