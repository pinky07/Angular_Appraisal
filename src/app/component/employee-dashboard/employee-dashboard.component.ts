import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Alert } from '../../model/alert/alert';
import { Employee } from '../../model/employee/employee';
import { AlertService } from '../../service/alert/alert.service';
import { EmployeeService } from '../../service/employee/employee.service';
import { MeService } from '../../service/me/me.service';
import { TitleService } from '../../service/title/title.service';

/**
 * Employee dashboard
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

    private currentEmployee: Employee;
    private mentor: Employee;

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
        private route: ActivatedRoute
    ) { }

    /**
     * TODO Document this!
     * @memberof EmployeeDashboardComponent
     */
    public ngOnInit() {
        this.meService
            .getMe()
            .subscribe(
            employee => this.changeCurrentEmployee(employee));

        this.meService
            .getMeMentor()
            .subscribe(employee => this.changeCurrentEmployeeMentor(employee));
    }

    public ngOnDestroy(): void {
        this.alertService.dismissAll();
    }

    /**
     * TODO Document this!
     * @param {Employee} employee
     * @memberof EmployeeDashboardComponent
     */
    public changeCurrentEmployee(employee: Employee) {
        this.currentEmployee = employee;
        this.titleService.setTitle(employee.firstName + ' ' + employee.lastName);
    }

    /**
     * TODO Document this!
     * @param {Employee} employee
     * @memberof EmployeeDashboardComponent
     */
    public changeCurrentEmployeeMentor(employee: Employee) {
        this.mentor = employee;
    }
}
