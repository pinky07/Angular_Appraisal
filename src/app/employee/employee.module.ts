import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { EmployeeSummaryComponent } from './component/employee-summary/employee-summary.component';
import { EmployeeRoutingModule } from './employee-routing.module';

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
        EmployeeRoutingModule,
    ],
    declarations: [
        EmployeeDashboardComponent,
        EmployeeSummaryComponent,
    ],
    providers: [
    ],
})
export class EmployeeModule { }
