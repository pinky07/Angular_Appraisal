import { TitleService } from '../../../core/service/title.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

/**
 * Displays Mentee information if the logged on Employee is a Mentor
 * @author Rubén Jiménez
 * @export
 * @class MentorDashboardComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
    selector: 'app-mentoring-dashboard',
    templateUrl: './mentoring-dashboard.component.html',
    styleUrls: ['./mentoring-dashboard.component.scss']
})
export class MentoringDashboardComponent implements OnInit, OnDestroy {

    public constructor(
        private titleService: TitleService
    ) { }

    public ngOnInit() {
        this.titleService.setTitle('Mentoring Dashboard');
    }

    public ngOnDestroy(): void {
        this.titleService.setDefaultTitle();
    }
}
