import { Component, Input } from '@angular/core';
import { EmployeeRelationship } from '../../../core/model/backend/employee-relationship';
/**
 * Displays a summary of references the Employee.
 * @export
 * @class EmployeeReferencesComponent
 */
@Component({
    selector: 'app-employee-references',
    templateUrl: './employee-references.component.html',
    styleUrls: [
        './employee-references.component.scss'
    ]
})
export class EmployeeReferencesComponent {

   // Employee's references
    @Input()
    public references: EmployeeRelationship[];

    /**
     * Creates an instance of EmployeeReferencesComponent.
     * @memberof EmployeeReferencesComponent
     */
    public constructor() { }

    /**
     * If present, returns the Employee Reference Count
     * @returns {string} Number of references
     * @memberof EmployeeReferencesComponent
     */
    public getEmployeeReferenceCount(): string {
        let result = 'No Reference Found';
        if (this.references &&
            this.references.length  > 0) {
            // result = this.references.length.toString().concat(' refernces found')
            result = 'References'
        }
        return result;
    }
}
