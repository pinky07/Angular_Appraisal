import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { ErrorComponent } from './component/error/error.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LoginCallbackComponent } from './component/login-callback/login-callback.component';
import { MentorDashboardComponent } from './component/mentor-dashboard/mentor-dashboard.component';
import { SilentLoginGuard } from './service/auth/silent-login-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/employeeDashboard', pathMatch: 'full' },
  { path: 'callback', component: LoginCallbackComponent },

  // All paths below must have the SilentLoginGuard!
  { path: 'error', component: ErrorComponent, canActivate: [SilentLoginGuard] },
  { path: 'employeeDashboard', component: EmployeeDashboardComponent, canActivate: [SilentLoginGuard] },
  { path: 'mentorDashboard', component: MentorDashboardComponent, canActivate: [SilentLoginGuard] },
  { path: 'adminDashboard', component: AdminDashboardComponent, canActivate: [SilentLoginGuard] },

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
