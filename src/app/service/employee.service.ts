import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { Employee } from '../model/employee/employee';
import { EmployeeRelationship } from '../model/employee/employee-relationship';
import { AuthService } from './auth.service';
import { ErrorHandlerService } from './error-handler.service';

/**
 * Communicates with /employees endpoints.
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class EmployeeService
 */
@Injectable()
export class EmployeeService {

    private maxRetries: number = environment.maxRetries;
    private employeeUrl = environment.employeeUrl;

    /**
     * Creates an instance of EmployeeService.
     * @param {Http} http
     * @param authService
     * @memberof EmployeeService
     */
    public constructor(
        private http: Http,
        private authService: AuthService
    ) { }

    /**
     * Gets the /employees/ endpoint.
     * @returns {Promise<Employee>}
     * @memberof EmployeeService
     */
    public getAllEmployees(searchTerm?: string): Observable<Employee[]> {
        let url = `${this.employeeUrl}/`;
        if (searchTerm) {
            url += '?searchTerm=' + searchTerm;
        }
        return this.http
            .get(url, this.authService.getOptionsWithToken())
            .retry(this.maxRetries)
            .map(response => response.json() as Employee[])
            .catch(ErrorHandlerService.handleError);
    }

    /**
     * Gets the /employees/:id endpoint.
     * @param {number} id
     * @returns {Promise<Employee>}
     * @memberof EmployeeService
     */
    public getEmployeeById(id: number): Observable<Employee> {
        const url = `${this.employeeUrl}/${id}`;
        return this.http
            .get(url, this.authService.getOptionsWithToken())
            .retry(this.maxRetries)
            .map(response => response.json() as Employee)
            .catch(ErrorHandlerService.handleError);
    }

    /**
     * Gets the /employees/:id/relationships endpoint.
     * @param {number} id Employee Id
     * @returns {Observable<EmployeeRelationship[]>} List of Employee Relationships
     * @memberof EmployeeService
     */
    public getEmployeeByIdRelationships(id: number): Observable<EmployeeRelationship[]> {
        const url = `${this.employeeUrl}/${id}/relationships`;
        return this.http
            .get(url, this.authService.getOptionsWithToken())
            .retry(this.maxRetries)
            .map(response => response.json() as EmployeeRelationship[])
            .catch(ErrorHandlerService.handleError);
    }

    /**
     * Post to the /employees/:id/relationships endpoint to create a new EmployeeRelationship.
     * @param {number} id Employee Id
     * @returns {Observable<EmployeeRelationship>} New EmployeeRelationship
     * @memberof EmployeeService
     */
    public postEmployeesByIdRelationships(id: number, employeeRelationship: EmployeeRelationship): Observable<EmployeeRelationship> {
        const url = `${this.employeeUrl}/${id}/relationships`;
        return this.http
            .post(url, employeeRelationship, this.authService.getOptionsWithToken())
            .retry(this.maxRetries)
            .map(response => response.json().data as EmployeeRelationship)
            .catch(ErrorHandlerService.handleError);
    }

    /**
     * Delete to the /employees/:id/relationships/:id endpoint to delete an existing EmployeeRelationship.
     * @param {number} employeeId Employee Id
     * @param {number} relationshipId EmployeeRelationship Id
     * @memberof EmployeeService
     */
    public deleteEmployeesByIdRelationshipsById(employeeId: number, relationshipId: number): Observable<any> {
        const url = `${this.employeeUrl}/${employeeId}/relationships/${relationshipId}`;
        return this.http
            .delete(url, this.authService.getOptionsWithToken())
            .retry(this.maxRetries)
            .catch(ErrorHandlerService.handleError);
    }

    /**
     * Gets the /employees/:id/mentor endpoint.
     * @param {number} id Internal lookup ID for the Employee
     * @returns {Promise<Employee>}
     * @memberof EmployeeService
     */
    public getMentor(id: number): Observable<Employee> {
        const url = `${this.employeeUrl}/${id}/mentor`;
        return this.http
            .get(url, this.authService.getOptionsWithToken())
            .retry(this.maxRetries)
            .map(response => response.json() as Employee)
            .catch(ErrorHandlerService.handleError);
    }
}
