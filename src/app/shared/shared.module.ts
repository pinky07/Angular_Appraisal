import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ActionItemsComponent } from './component/action-items/action-items.component';
import { AlertComponent } from './component/alert/alert.component';
import { CollapsableCardComponent } from './component/collapsable-card/collapsable-card.component';

/**
 * TODO Document this!
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class SharedModule
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NgbModule,
    ],
    declarations: [
        ActionItemsComponent,
        AlertComponent,
        CollapsableCardComponent,
    ],
    exports: [
        // Modules
        CommonModule,
        FormsModule,
        HttpModule,
        NgbModule,
        // Components
        ActionItemsComponent,
        AlertComponent,
        CollapsableCardComponent,
    ]
})
export class SharedModule { }
