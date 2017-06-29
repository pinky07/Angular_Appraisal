import { Component, OnDestroy, OnInit } from '@angular/core';

import { Alert } from '../../model/alert/alert';
import { AlertService } from '../../service/alert/alert.service';
import { TitleService } from '../../service/title/title.service';

/**
 * TODO Document this!
 * @author Rubén Jiménez
 * @export
 * @class AdminDashboardComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

    public constructor(
        private alertService: AlertService,
        private titleService: TitleService,
    ) { }

    public ngOnInit(): void {
        this.alertService.warning('Unimplemented', 'Admin dashboard hasn\'t been implemented yet');
    }

    public ngOnDestroy(): void {
        this.alertService.dismissAll();
    }
}
