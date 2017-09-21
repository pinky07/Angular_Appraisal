import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Employee } from '../model/backend/employee';
import { AuthService } from './auth.service';
import { ErrorHandlerService } from './error-handler.service';

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

    private getMeObservable: Observable<Employee>;
    private getMeMentorObservable: Observable<Employee>;
    private getMeMenteesObservable: Observable<Employee[]>;

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
        // TODO Determine if it's necessary to clear this cache and when
        if (!this.getMeObservable) {
            const url = `${this.meUrl}`;
            this.getMeObservable = this.http
                .get(url, this.authService.getOptionsWithToken())
                .retry(this.maxRetries)
                .map(response => response.json() as Employee)
                .publishReplay(1)
                .refCount()
                .catch(ErrorHandlerService.handleError);
        }
        return this.getMeObservable;
    }

    /**
     * Returns the Mentor information for the currently logged in user.
     * @returns {Promise<Employee>} Mentor information
     * @memberof MeService
     */
    public getMeMentor(): Observable<Employee> {
        // TODO Determine if it's necessary to clear this cache and when
        if (!this.getMeMentorObservable) {
            const url = `${this.meUrl}/mentor`;
            this.getMeMentorObservable = this.http
                .get(url, this.authService.getOptionsWithToken())
                .retry(this.maxRetries)
                .map(response => response.json() as Employee)
                .catch(ErrorHandlerService.handleError);
        }
        return this.getMeMentorObservable;
    }

    /**
     * Returns the Mentee information for the currently logged in user.
     * @returns {Promise<Employee>} Mentor information
     * @memberof MeService
     */
    public getMeMentees(): Observable<Employee[]> {
        // TODO Determine if it's necessary to clear this cache and when
        if (!this.getMeMenteesObservable) {
            const url = `${this.meUrl}/mentees`;
            this.getMeMenteesObservable = this.http
                .get(url, this.authService.getOptionsWithToken())
                .retry(this.maxRetries)
                .map(response => response.json() as Employee)
                .catch(ErrorHandlerService.handleError);
        }
        return this.getMeMenteesObservable;
    }
}
