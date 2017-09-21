import { Component, OnDestroy, OnInit } from '@angular/core';

import { Employee } from '../../../core/model/backend/employee';
import { AlertService } from '../../../core/service/alert.service';
import { TitleService } from '../../../core/service/title.service';

/**
 * Shows the Admin dashboard.
 * @author Rubén Jiménez
 * @author Manuel Yepez
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

    public mentor: Employee;

    public constructor(
        private alertService: AlertService,
        private titleService: TitleService,
    ) { }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public setMentor(item: Employee): void {
        this.mentor = item;
    }
}
