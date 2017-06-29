import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './component/admin/admin-dashboard.component';
import { EmployeeDashboardComponent } from './component/employee/employee-dashboard.component';
import { ErrorComponent } from './component/error/error.component';
import { PageNotFoundComponent } from './component/error/page-not-found.component';
import { CallbackComponent } from './component/login/callback.component';
import { MentorDashboardComponent } from './component/mentor/mentor-dashboard.component';
import { SilentLoginGuard } from './service/auth/silent-login-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/employeeDashboard', pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent },
  { path: 'error', component: ErrorComponent, canActivate: [SilentLoginGuard] },
  { path: 'employeeDashboard', component: EmployeeDashboardComponent, canActivate: [SilentLoginGuard] },
  { path: 'mentorDashboard', component: MentorDashboardComponent, canActivate: [SilentLoginGuard] },
  { path: 'adminDashboard', component: AdminDashboardComponent, canActivate: [SilentLoginGuard] },
  /* { path: 'employee/:id/peer', component: PeerComponent },
  { path: 'employee/:employeeId/appraisals', component: AppraisalListComponent },
  { path: 'employee/:employeeId/appraisal/:id', component: AppraisalDetailComponent },
  { path: 'employee/:employeeId/appraisals/peer/:id', component: PeerDetailComponent },
  { path: 'employee/:employeeId/appraisals/mentor/:id', component: AppraisalMentorRevisionComponent },
  { path: 'employee/:id/admin', component: AdminComponent } */
  { path: '**', component: PageNotFoundComponent }
];

/**
 * TODO Document this!
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
