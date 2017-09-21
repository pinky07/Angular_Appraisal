import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SilentLoginGuard } from '../core/guard/silent-login-guard.service';
import { MentoringDashboardComponent } from './component/mentoring-dashboard/mentoring-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: MentoringDashboardComponent,
        canActivate: [SilentLoginGuard],
    },
];

/**
 * Holds Mentoring Module routes
 * @author Ruben Jimenez
 * @export
 * @class MentoringRoutingModule
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MentoringRoutingModule { }
