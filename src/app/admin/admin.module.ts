import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AddMenteesComponent } from './component/add-mentees/add-mentees.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { SearchEmployeeComponent } from './component/search-employee/search-employee.component';

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
        AdminRoutingModule,
    ],
    declarations: [
        AddMenteesComponent,
        AdminDashboardComponent,
        SearchEmployeeComponent,
    ],
    providers: [
    ],
})
export class AdminModule { }
