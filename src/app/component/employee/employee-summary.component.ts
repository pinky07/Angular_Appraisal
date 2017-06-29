import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Employee } from '../../model/employee/employee';

@Component({
    selector: 'app-employee-summary',
    templateUrl: './employee-summary.component.html',
    styleUrls: ['./employee-summary.component.scss']
})
export class EmployeeSummaryComponent implements OnInit, OnDestroy {

    @Input()
    private employee: Employee;

    @Input()
    private mentor: Employee;

    public constructor(
    ) { }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
    }

    /**
     * TODO Document this!
     * @returns {string}
     * @memberof EmployeeDashboardComponent
     */
    public getEmployeeJobLevel(): string {
        let result: string = undefined;
        if (this.employee &&
            this.employee.jobLevel &&
            this.employee.jobLevel.name) {
            result = this.employee.jobLevel.name
        }
        return result;
    }

    /**
     * TODO Document this!
     * @returns {string}
     * @memberof EmployeeDashboardComponent
     */
    public getEmployeeJobFamily(): string {
        let result: string = undefined;
        if (this.employee &&
            this.employee.jobLevel &&
            this.employee.jobLevel.jobFamily &&
            this.employee.jobLevel.jobFamily.name) {
            result = this.employee.jobLevel.jobFamily.name
        }
        return result;
    }
}
