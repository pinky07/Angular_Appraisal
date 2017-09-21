import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './core/component/error/error.component';
import { LoginCallbackComponent } from './core/component/login-callback/login-callback.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';
import { AdminModuleCanLoadGuard } from './core/guard/admin-module-can-load-guard.service';
import { AppraisalModuleCanLoadGuard } from './core/guard/appraisal-module-can-load-guard.service';
import { MentoringModuleCanLoadGuard } from './core/guard/mentoring-module-can-load-guard.service';
import { SilentLoginGuard } from './core/guard/silent-login-guard.service';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'employeeDashboard',
    pathMatch: 'full',
  },
  {
    path: 'callback',
    component: LoginCallbackComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },

  // All paths below must have the SilentLoginGuard!

  {
    path: 'adminDashboard',
    loadChildren: 'app/admin/admin.module#AdminModule', // Lazy Loaded
    canLoad: [SilentLoginGuard, AdminModuleCanLoadGuard],
  },
  {
    path: 'appraisalDashboard',
    loadChildren: 'app/appraisal/appraisal.module#AppraisalModule', // Lazy Loaded
    canLoad: [SilentLoginGuard, AppraisalModuleCanLoadGuard],
  },
  {
    path: 'employeeDashboard',
    loadChildren: 'app/employee/employee.module#EmployeeModule', // Lazy Loaded
    canLoad: [SilentLoginGuard],
  },
  {
    path: 'mentoringDashboard',
    loadChildren: 'app/mentoring/mentoring.module#MentoringModule', // Lazy Loaded
    canLoad: [SilentLoginGuard, MentoringModuleCanLoadGuard],
  },

  // Default page
  {
    path: '**', // Default page
    component: PageNotFoundComponent,
  },
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
