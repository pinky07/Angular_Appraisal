import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { Employee } from '../model/employee/employee';
import { AuthService } from './auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { REFERENCES } from './mock/employee-references.mock';

/**
 * TODO Document this!
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class EmployeeService
 */
@Injectable()
export class EmployeeService {

    private maxRetries: number = environment.maxRetries;
    private employeesUrl = environment.employeeUrl;

    /**
     * Creates an instance of EmployeeService.
     * @param {Http} http
     * @memberof EmployeeService
     */
    public constructor(
        private http: Http,
        private authService: AuthService,
        private errorHandlerService: ErrorHandlerService
    ) { }

    /**
     * TODO Document this!
     * @param {number} id
     * @returns {Promise<Employee>}
     * @memberof EmployeeService
     */
    public getEmployeeById(id: number): Observable<Employee> {
        const url = `${this.employeesUrl}/${id}`;
        return this.http
            .get(url, this.authService.getOptionsWithToken())
            .retry(this.maxRetries)
            .map(response => response.json().data as Employee)
            .catch(this.errorHandlerService.handleError);
    }

    public getEmployeeByIdReferences(id: number): Observable<Employee[]> {
        return Observable.of(REFERENCES);
        // const url = `${this.employeesUrl}/${id}/peers`;
        // return this.http
        //     .get(url, this.authService.getOptionsWithToken())
        //     .retry(this.maxRetries)
        //     .map(response => response.json().data as Employee)
        //     .catch(this.errorHandlerService.handleError);
    }

    /**
     * TODO Document this!
     * @param {number} id
     * @returns {Promise<Employee>}
     * @memberof EmployeeService
     */
    public getMentor(id: number): Observable<Employee> {
        const url = `${this.employeesUrl}/${id}/mentor`;
        return this.http
            .get(url, this.authService.getOptionsWithToken())
            .retry(this.maxRetries)
            .map(response => response.json().data as Employee)
            .catch(this.errorHandlerService.handleError);
    }
}
