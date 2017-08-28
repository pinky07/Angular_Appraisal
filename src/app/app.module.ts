import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AppraisalDashboardComponent } from './component/appraisal-dashboard/appraisal-dashboard.component';
import { AppraisalSummaryComponent } from './component/appraisal-dashboard/appraisal-summary/appraisal-summary.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { EmployeeSummaryComponent } from './component/employee-dashboard/employee-summary/employee-summary.component';
import {
    AddReferencesComponent,
} from './component/mentoring-dashboard/mentee-summary/add-mentee-reference/add-mentee-reference.component';
import { MenteeSummaryComponent } from './component/mentoring-dashboard/mentee-summary/mentee-summary.component';
import { MentoringDashboardComponent } from './component/mentoring-dashboard/mentoring-dashboard.component';
import { ActionItemsComponent } from './component/shared/action-items/action-items.component';
import { ErrorComponent } from './component/shared/error/error.component';
import { LoginCallbackComponent } from './component/shared/login-callback/login-callback.component';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { AppraisalDashboardGuard } from './guard/appraisal-dashboard.guard';
import { MentoringDashboardGuard } from './guard/mentoring-dashboard.guard';
import { SilentLoginGuard } from './guard/silent-login-guard.service';
import { AlertComponent } from './layout/alert/alert.component';
import { CollapsableCardComponent } from './layout/collapsable-card/collapsable-card.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ActionItemService } from './service/action-item.service';
import { AlertService } from './service/alert.service';
import { AuthService } from './service/auth.service';
import { EmployeeRelationshipService } from './service/employee-relationship.service';
import { EmployeeService } from './service/employee.service';
import { ErrorHandlerService } from './service/error-handler.service';
import { MeService } from './service/me.service';
import { MenuService } from './service/menu.service';
import { RelationshipService } from './service/relationship.service';
import { TitleService } from './service/title.service';

/**
 * TODO Document this!
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertComponent,
    MenuComponent,
    LoginCallbackComponent,
    ErrorComponent,
    PageNotFoundComponent,
    EmployeeDashboardComponent,
    EmployeeSummaryComponent,
    MentoringDashboardComponent,
    MenteeSummaryComponent,
    AdminDashboardComponent,
    ActionItemsComponent,
    AppraisalSummaryComponent,
    CollapsableCardComponent,
    AppraisalDashboardComponent,
    AddReferencesComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SilentLoginGuard,
    MentoringDashboardGuard,
    AppraisalDashboardGuard,
    AlertService,
    AuthService,
    TitleService,
    EmployeeService,
    EmployeeRelationshipService,
    RelationshipService,
    MeService,
    ErrorHandlerService,
    ActionItemService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
