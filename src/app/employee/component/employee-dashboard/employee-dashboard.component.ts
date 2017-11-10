import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../../../core/model/backend/employee';
import { AlertService } from '../../../core/service/alert.service';
import { EmployeeService } from '../../../core/service/employee.service';
import { MeService } from '../../../core/service/me.service';
import { TitleService } from '../../../core/service/title.service';
import { EmployeeRelationship } from '../../../core/model/backend/employee-relationship';
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
    public userRelationshipsArray: EmployeeRelationship[];
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
     * Initializes the component.
     * @memberof EmployeeDashboardComponent
     */
    public ngOnInit(): void {

        // Download employee information
        this.meService
            .getMe()
            .subscribe(
            employee => this.changeCurrentEmployee(employee));

        // Download mentor information
        this.meService
            .getMeMentor()
            .subscribe(employee => this.changeCurrentEmployeeMentor(employee));

        this.titleService.setTitle('Employee Dashboard');
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
      this.employeeService
        .getEmployeeByIdRelationships(this.currentEmployee.id)
        .subscribe(references => this.changeUserReferences(references));
    }

    /**
     * Changes the mentor of the employee currently shown in the summary
     * @param {Employee} employee
     * @memberof EmployeeDashboardComponent
     */
    private changeCurrentEmployeeMentor(employee: Employee) {
        this.mentor = employee;
    }

    /**
     * Changes the reference currently shown in the summary
     * @returns {array} Employee relationship
     * @memberof EmployeeDashboardComponent
     */
    private changeUserReferences(references: EmployeeRelationship[]) {
      console.log('user references', references);
      this.userRelationshipsArray = references;
    }

    /**
     * If present, returns the Employee Reference Count
     * @returns {string} Number of references
     * @memberof EmployeeReferencesComponent
     */
    public getEmployeeReferenceCount(): string {
      let result = 'No Reference Found';
      if (this.userRelationshipsArray &&
        this.userRelationshipsArray.length  > 0) {
        result = 'References'
      }
      return result;
    }
  }
