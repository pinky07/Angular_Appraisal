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
import { MENTEES } from './mock/me-mentees.mock';

/**
 * Handles web service calls to the /me endpoint
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class MeService
 */
@Injectable()
export class MeService {

    private maxRetries: number = environment.maxRetries;
    private meUrl: string = environment.meUrl;

    /**
     * Creates an instance of MeService.
     * @param {Http} http
     * @memberof MeService
     */
    public constructor(
        private http: Http,
        private authService: AuthService,
        private errorHandlerService: ErrorHandlerService
    ) { }

    /**
     * Returns the Employee information for the currently logged in user.
     * @returns {Promise<Employee>} Employee information
     * @memberof MeService
     */
    public getMe(): Observable<Employee> {
        const url = `${this.meUrl}`;
        return this.http
            .get(url, this.authService.getOptionsWithToken())
            .retry(this.maxRetries)
            .map(response => response.json() as Employee)
            .catch(this.errorHandlerService.handleError);
    }

    /**
     * Returns the Mentor information for the currently logged in user.
     * @returns {Promise<Employee>} Mentor information
     * @memberof MeService
     */
    public getMeMentor(): Observable<Employee> {
        const url = `${this.meUrl}/mentor`;
        return this.http
            .get(url, this.authService.getOptionsWithToken())
            .retry(this.maxRetries)
            .map(response => response.json() as Employee)
            .catch(this.errorHandlerService.handleError);
    }

    /**
     * Returns the Mentee information for the currently logged in user.
     * @returns {Promise<Employee>} Mentor information
     * @memberof MeService
     */
    public getMeMentees(): Observable<Employee[]> {
        return Observable.of(MENTEES);
        // const url = `${this.meUrl}/mentor`;
        // return this.http
        //    .get(url, this.authService.getOptionsWithToken())
        //    .retry(this.maxRetries)
        //    .map(response => response.json() as Employee)
        //    .catch(this.errorHandlerService.handleError);
    }
}
