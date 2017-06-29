import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard.component';
import { EmployeeDashboardComponent } from './component/employee/employee-dashboard.component';
import { EmployeeSummaryComponent } from './component/employee/employee-summary.component';
import { ErrorComponent } from './component/error/error.component';
import { PageNotFoundComponent } from './component/error/page-not-found.component';
import { CallbackComponent } from './component/login/callback.component';
import { MentorDashboardComponent } from './component/mentor/mentor-dashboard.component';
import { ActionItemsComponent } from './example/action-items.component';
import { GridComponent } from './example/grid.component';
import { AlertComponent } from './layout/alert/alert.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { AlertService } from './service/alert/alert.service';
import { AuthService } from './service/auth/auth.service';
import { SilentLoginGuard } from './service/auth/silent-login-guard.service';
import { EmployeeService } from './service/employee/employee.service';
import { ErrorHandlerService } from './service/error/error-handler.service';
import { MeService } from './service/me/me.service';
import { TitleService } from './service/title/title.service';

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
    CallbackComponent,
    ErrorComponent,
    PageNotFoundComponent,
    EmployeeDashboardComponent,
    EmployeeSummaryComponent,
    MentorDashboardComponent,
    AdminDashboardComponent,
    ActionItemsComponent,
    GridComponent
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
    AlertService,
    SilentLoginGuard,
    AuthService,
    TitleService,
    EmployeeService,
    MeService,
    ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
