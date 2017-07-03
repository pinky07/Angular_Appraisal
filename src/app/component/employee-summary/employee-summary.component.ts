import { Component, Input } from '@angular/core';

import { CollapsableCard } from '../../layout/collapsable-card/collapsable-card';
import { Employee } from '../../model/employee/employee';


/**
 * Displays a summary of the Employee information.
 * @export
 * @class EmployeeSummaryComponent
 */
@Component({
    selector: 'app-employee-summary',
    templateUrl: './employee-summary.component.html',
    styleUrls: [
        '../../layout/collapsable-card/collapsable-card.scss',
        './employee-summary.component.scss'
    ]
})
export class EmployeeSummaryComponent extends CollapsableCard {

    // Employee
    @Input()
    private employee: Employee;

    // Employee's mentor
    @Input()
    private mentor: Employee;

    /**
     * Creates an instance of EmployeeSummaryComponent.
     * @memberof EmployeeSummaryComponent
     */
    public constructor() {
        super();
    }

    /**
     * If present, returns the Employee Job Level
     * @returns {string} Employee Job Level or undefined
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
     * If present, returns the Employee Job Family
     * @returns {string} Employee Job Family or undefined
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
