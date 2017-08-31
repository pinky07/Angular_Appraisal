import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {Employee} from '../../../model/employee/employee';
import {EmployeeRelationship} from '../../../model/employee/employee-relationship';
import {EmployeeService} from '../../../service/employee.service';
import {MeService} from '../../../service/me.service';
import {TitleService} from '../../../service/title.service';
import {EmployeeRelationshipService} from '../../../service/employee-relationship.service';

/**
 * Displays Mentee information if the logged on Employee is a Mentor
 * @author Rubén Jiménez
 * @export
 * @class MentorDashboardComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
    selector: 'app-mentee-summary',
    templateUrl: './mentee-summary.component.html',
    styleUrls: ['./mentee-summary.component.scss']
})
export class MenteeSummaryComponent implements OnInit {

    public mentees: Employee[];
    private menteeRelationshipsMap: Map<number, EmployeeRelationship[]>;

    /**
     * Creates an instance of MentoringDashboardComponent.
     * @param {TitleService} titleService Title service
     * @param {MeService} meService Me service
     * @param {EmployeeService} employeeService Employee service
     * @param employeeRelationshipService EmployeeRelationship service
     * @param {NgbModal} modalService Modal window service
     * @memberof MentoringDashboardComponent
     */
    public constructor(
        private meService: MeService,
        private employeeService: EmployeeService,
        private employeeRelationshipService: EmployeeRelationshipService,
        private modalService: NgbModal
    ) {
        this.menteeRelationshipsMap = new Map();
    }

    public ngOnInit() {
        // Download mentees information
        this.meService
            .getMeMentees()
            .subscribe(employees => this.changeCurrentMentees(employees));
    }

    public deleteMenteeReference(deleteConfirmation: any, mentee: Employee, employeeRelationship: EmployeeRelationship) {
        this.modalService.open(deleteConfirmation).result.then(
            () => this.employeeRelationshipService.deleteEmployeesByIdRelationshipsById(mentee.id, employeeRelationship.id)
                .subscribe(() => this.deleteMenteeReferenceCallback(mentee, employeeRelationship)),
            () => { });
    }

    private deleteMenteeReferenceCallback(mentee: Employee, deletedEmployeeRelationship: EmployeeRelationship) {
        this.changeMenteeReferences(
            mentee.id,
            this.menteeRelationshipsMap[mentee.id].filter(
                employeeRelationship => employeeRelationship.id !== deletedEmployeeRelationship.id));

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

