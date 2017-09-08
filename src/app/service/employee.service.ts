import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/take';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {environment} from '../../environments/environment';
import {Employee} from '../model/employee/employee';
import {EmployeeRelationship} from '../model/employee/employee-relationship';
import {AuthService} from './auth.service';
import {ErrorHandlerService} from './error-handler.service';

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
     * @returns {Observable<Employee[]>}
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
     * @returns {Observable<Employee>}
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
     * Gets the /employees/:id/mentor endpoint.
     * @param {number} id Internal lookup ID for the Employee
     * @returns {Observable<Employee>}
     * @memberof EmployeeService
     */
    public getMentor(id: number): Observable<Employee> {
        const url = `${this.employeeUrl}/${id}/mentor`;
        return this.http
            .get(url, this.authService.getOptionsWithToken())
            .retryWhen(errors => {
              return errors
                .mergeMap(error => (error.status === 404) ? Observable.throw(error) : Observable.of(error))
                .take(this.maxRetries);
            })
            .map(response => response.json() as Employee)
            .catch(ErrorHandlerService.handleError);
    }

    /**
     * Put /employees/:id/mentor endpoint.
     * @param {number} id Internal lookup ID for the Mentee
     * @param {mentor} mentor Mentor to be associated
     * @returns {Observable<Employee>}
     * @memberof EmployeeService
     */
    public putMentor(id: number, mentor: Employee): Observable<any> {
      const url = `${this.employeeUrl}/${id}/mentor`;
      return this.http
        .put(url, mentor, this.authService.getOptionsWithToken())
        .retry(this.maxRetries)
        .catch(ErrorHandlerService.handleError);
    }

    /**
     * Delete /employees/:id/mentor endpoint.
     * @param {number} id Internal lookup ID for the Mentee
     * @returns {Observable<Employee>}
     * @memberof EmployeeService
     */
    public deleteMentor(id: number): Observable<any> {
      const url = `${this.employeeUrl}/${id}/mentor`;
      return this.http
        .delete(url, this.authService.getOptionsWithToken())
        .retry(this.maxRetries)
        .catch(ErrorHandlerService.handleError);
    }

  /**
   * Gets the /employees/:id/mentees endpoint.
   * @param {number} id Internal lookup ID for the Employee
   * @returns {Observable<Employee[]>}
   * @memberof EmployeeService
   */
  public getMentees(id: number): Observable<Employee[]> {
    const url = `${this.employeeUrl}/${id}/mentees`;
    return this.http
      .get(url, this.authService.getOptionsWithToken())
      .retry(this.maxRetries)
      .map(response => response.json() as Employee[])
      .catch(ErrorHandlerService.handleError);
  }
}
