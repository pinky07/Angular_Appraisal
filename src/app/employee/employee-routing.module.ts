import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SilentLoginGuard } from '../core/guard/silent-login-guard.service';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeDashboardComponent,
        canActivate: [SilentLoginGuard],
    },
];

/**
 * Holds Employee Module routes
 * @author Ruben Jimenez
 * @export
 * @class EmployeeRoutingModule
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
