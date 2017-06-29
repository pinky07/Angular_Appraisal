import { Component, OnDestroy, OnInit } from '@angular/core';

import { Alert } from '../../model/alert/alert';
import { AlertService } from '../../service/alert/alert.service';
import { TitleService } from '../../service/title/title.service';

/**
 * TODO Document this!
 * @author Rubén Jiménez
 * @export
 * @class MentorDashboardComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-mentor-dashboard',
    templateUrl: './mentor-dashboard.component.html',
    styleUrls: ['./mentor-dashboard.component.scss']
})
export class MentorDashboardComponent implements OnInit, OnDestroy {

    public constructor(
        private alertService: AlertService,
        private titleService: TitleService,
    ) { }

    public ngOnInit() {
        this.alertService.warning('Unimplemented', 'Mentor dashboard hasn\'t been implemented yet');
    }

    public ngOnDestroy(): void {
        this.alertService.dismissAll();
    }
}
