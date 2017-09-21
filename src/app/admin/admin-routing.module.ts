import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SilentLoginGuard } from '../core/guard/silent-login-guard.service';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent,
        canActivate: [SilentLoginGuard],
    },
];

/**
 * Holds Admin Module routes
 * @author Ruben Jimenez
 * @export
 * @class AdminRoutingModule
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
