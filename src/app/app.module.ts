import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ActionItemsComponent} from './component/action-items/action-items.component';
import {AdminDashboardComponent} from './component/admin-dashboard/admin-dashboard.component';
import {AppraisalDashboardComponent} from './component/appraisal-dashboard/appraisal-dashboard.component';
import {AppraisalSummaryComponent} from './component/appraisal-summary/appraisal-summary.component';
import {EmployeeDashboardComponent} from './component/employee-dashboard/employee-dashboard.component';
import {EmployeeSummaryComponent} from './component/employee-summary/employee-summary.component';
import {ErrorComponent} from './component/error/error.component';
import {LoginCallbackComponent} from './component/login-callback/login-callback.component';
import {MentoringDashboardComponent} from './component/mentoring-dashboard/mentoring-dashboard.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {MentoringDashboardGuard} from './guard/mentoring-dashboard.guard';
import {SilentLoginGuard} from './guard/silent-login-guard.service';
import {AlertComponent} from './layout/alert/alert.component';
import {CollapsableCardComponent} from './layout/collapsable-card/collapsable-card.component';
import {HeaderComponent} from './layout/header/header.component';
import {MenuComponent} from './layout/menu/menu.component';
import {ActionItemService} from './service/action-item.service';
import {AlertService} from './service/alert.service';
import {AuthService} from './service/auth.service';
import {EmployeeService} from './service/employee.service';
import {ErrorHandlerService} from './service/error-handler.service';
import {MeService} from './service/me.service';
import {MenuService} from './service/menu.service';
import {TitleService} from './service/title.service';
import {AppraisalDashboardGuard} from './guard/appraisal-dashboard.guard';
import {AddReferencesComponent} from './component/add-references/add-references.component';
import {EmployeeRelationshipService} from './service/employee-relationship.service';

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
    MeService,
    ErrorHandlerService,
    ActionItemService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
