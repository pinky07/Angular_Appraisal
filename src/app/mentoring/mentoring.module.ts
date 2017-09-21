import { AddMenteeReferencesComponent } from './component/add-mentee-reference/add-mentee-reference.component';
import { NgModule } from '@angular/core';

import { AddMenteesComponent } from '../admin/component/add-mentees/add-mentees.component';
import { SharedModule } from '../shared/shared.module';
import { MenteeSummaryComponent } from './component/mentee-summary/mentee-summary.component';
import { MentoringDashboardComponent } from './component/mentoring-dashboard/mentoring-dashboard.component';
import { MentoringRoutingModule } from './mentoring-routing.module';

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
        MentoringRoutingModule,
    ],
    declarations: [
        AddMenteeReferencesComponent,
        MenteeSummaryComponent,
        MentoringDashboardComponent,
    ],
    providers: [
    ],
})
export class MentoringModule { }
