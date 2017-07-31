import { Component, OnDestroy, OnInit } from '@angular/core';

import { Employee } from '../../model/employee/employee';
import { EmployeeRelationship } from '../../model/employee/employee-relationship';
import { EmployeeService } from '../../service/employee.service';
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

    public mentees: Employee[];
    private menteeRelationshipsMap: Map<number, EmployeeRelationship[]>;

    /**
     * Creates an instance of MentoringDashboardComponent.
     * @param {TitleService} titleService Title service
     * @param {MeService} meService Me service
     * @param {EmployeeService} employeeService Employee service
     * @memberof MentoringDashboardComponent
     */
    public constructor(
        private titleService: TitleService,
        private meService: MeService,
        private employeeService: EmployeeService
    ) {
        this.menteeRelationshipsMap = new Map();
    }

    public ngOnInit() {
        this.titleService.setTitle('Mentoring Dashboard');

        // Download mentees information
        this.meService
            .getMeMentees()
            .subscribe(employees => this.changeCurrentMentees(employees));
    }

    public ngOnDestroy(): void {
        this.titleService.setDefaultTitle();
    }

    private changeCurrentMentees(mentees: Employee[]): void {
        this.mentees = mentees;

        for (const mentee of this.mentees) {
            this.employeeService
                .getEmployeeByIdRelationships(mentee.id)
                .subscribe(references => this.changeMenteeReferences(mentee.id, references));
        }
    }

    private changeMenteeReferences(menteeId: number, references: EmployeeRelationship[]) {
        this.menteeRelationshipsMap[menteeId] = references;
    }
}

