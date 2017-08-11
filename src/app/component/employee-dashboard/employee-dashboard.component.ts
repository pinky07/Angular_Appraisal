import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../../model/employee/employee';
import {AlertService} from '../../service/alert.service';
import {EmployeeService} from '../../service/employee.service';
import {MeService} from '../../service/me.service';
import {MenuService} from '../../service/menu.service';
import {TitleService} from '../../service/title.service';

/**
 * Shows the Employee dashboard.
 * @author Manuel Yepez
 * @author Rubén Jiménez
 * @export
 * @class EmployeeDashboardComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-employee-dashboard',
    templateUrl: './employee-dashboard.component.html',
    styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit, OnDestroy {

    public currentEmployee: Employee;
    public mentor: Employee;

    /**
     * Creates an instance of EmployeeDashboardComponent.
     * @param {EmployeeService} employeeService
     * @param {ActivatedRoute} route
     * @memberof EmployeeDashboardComponent
     */
    public constructor(
        private alertService: AlertService,
        private employeeService: EmployeeService,
        private meService: MeService,
        private titleService: TitleService,
        private menuService: MenuService,
        private route: ActivatedRoute
    ) { }

    /**
     * Initializes the component.
     * @memberof EmployeeDashboardComponent
     */
    public ngOnInit() {

        // Download employee information
        this.meService
            .getMe()
            .subscribe(
            employee => this.changeCurrentEmployee(employee));

        // Download mentor information
        this.meService
            .getMeMentor()
            .subscribe(employee => this.changeCurrentEmployeeMentor(employee));
    }


    /**
     * Clean up code
     * @memberof EmployeeDashboardComponent
     */
    public ngOnDestroy(): void {
        // Dismiss alerts created by this component
        this.alertService.dismissAll();

        // Set the default title back
        this.titleService.setDefaultTitle();
    }

    /**
     * Returns the name of the current employee
     * @returns {string} Employee name
     * @memberof EmployeeDashboardComponent
     */
    public getEmployeeName(): string {
        let result = 'Unregistered';
        if (this.currentEmployee
            && this.currentEmployee.firstName
            && this.currentEmployee.lastName) {
            result = this.currentEmployee.firstName + ' ' + this.currentEmployee.lastName;
          this.menuService.setAppraisalDashboardEnabled(true);
        } else if (!this.currentEmployee) {
          this.menuService.setAppraisalDashboardEnabled(false);
        }
        return result;
    }

    /**
     * Changes the employee currently shown in the summary
     * @param {Employee} employee
     * @memberof EmployeeDashboardComponent
     */
    private changeCurrentEmployee(employee: Employee) {

        // Change the field that is presented in the view
        this.currentEmployee = employee;

        // Change the application title
        this.titleService.setTitle(employee.firstName + ' ' + employee.lastName);

        // Activate the Mentoring Dashboard if the current user is a Mentor
        this.menuService.setMentoringDashboardEnabled(this.currentEmployee.isMentor);
    }

    /**
     * Changes the mentor of the employee currently shown in the summary
     * @param {Employee} employee
     * @memberof EmployeeDashboardComponent
     */
    private changeCurrentEmployeeMentor(employee: Employee) {
        this.mentor = employee;
    }
}
