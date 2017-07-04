import { Component, OnDestroy, OnInit } from '@angular/core';

import { Employee } from '../../model/employee/employee';
import { MeService } from '../../service/me.service';
import { TitleService } from '../../service/title.service';

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

    private currentMentees: Employee[];

    public constructor(
        private titleService: TitleService,
        private meService: MeService
    ) { }

    public ngOnInit() {
        this.titleService.setTitle('Mentoring Dashboard');

        // Download mentees information
        this.meService
            .getMeMentees()
            .subscribe(
            employees => this.changeCurrentMentees(employees));
    }

    public ngOnDestroy(): void {
        this.titleService.setDefaultTitle();
    }

    public changeCurrentMentees(employees: Employee[]): void {
        this.currentMentees = employees;
        console.log(this.currentMentees);
    }
}

