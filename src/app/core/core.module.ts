import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './component/error/error.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginCallbackComponent } from './component/login-callback/login-callback.component';
import { MenuComponent } from './component/menu/menu.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CoreRoutingModule } from './core-routing.module';
import { AdminModuleCanLoadGuard } from './guard/admin-module-can-load-guard.service';
import { AppraisalModuleCanLoadGuard } from './guard/appraisal-module-can-load-guard.service';
import { MentoringModuleCanLoadGuard } from './guard/mentoring-module-can-load-guard.service';
import { SilentLoginGuard } from './guard/silent-login-guard.service';
import { ActionItemService } from './service/action-item.service';
import { AlertService } from './service/alert.service';
import { AppraisalService } from './service/appraisal.service';
import { AuthService } from './service/auth.service';
import { EmployeeRelationshipService } from './service/employee-relationship.service';
import { EmployeeService } from './service/employee.service';
import { ErrorHandlerService } from './service/error-handler.service';
import { MeService } from './service/me.service';
import { MenuService } from './service/menu.service';
import { RelationshipTypeService } from './service/relationship-type.service';
import { TitleService } from './service/title.service';

/**
 * Contains all Components only used in the AppComponent but not shared across modules, as well as
 * any services the application uses. Since services are not scoped to modules, this is the best
 * place to put them and collect them all.
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class CoreModule
 */
@NgModule({
    imports: [
        SharedModule,
        CoreRoutingModule,
    ],
    declarations: [
        ErrorComponent,
        HeaderComponent,
        LoginCallbackComponent,
        MenuComponent,
        PageNotFoundComponent
    ],
    exports: [
        ErrorComponent,
        HeaderComponent,
        LoginCallbackComponent,
        MenuComponent,
        PageNotFoundComponent
    ],
    providers: [
        // Guards
        AdminModuleCanLoadGuard,
        AppraisalModuleCanLoadGuard,
        MentoringModuleCanLoadGuard,
        SilentLoginGuard,
        // Services
        ActionItemService,
        AlertService,
        AppraisalService,
        AuthService,
        EmployeeRelationshipService,
        EmployeeService,
        ErrorHandlerService,
        MeService,
        MenuService,
        RelationshipTypeService,
        TitleService
    ]
})
export class CoreModule { }
