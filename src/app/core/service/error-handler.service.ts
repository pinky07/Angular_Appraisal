// Angular imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';


/**
 * TODO Document this!
 * @author Ruben Jimenez
 * @export
 * @class ErrorHandlerService
 */
@Injectable()
export class ErrorHandlerService {

    private static maxRetries: number = environment.maxRetries;
    private static retryDelay: number = environment.retryDelay;

    public static retry(errors: Observable<any>): Observable<any> {
        return errors
            .mergeMap((error) => (400 <= error.status && error.status < 500) ? Observable.throw(error) : Observable.of(error))
            .delay(ErrorHandlerService.retryDelay)
            .take(ErrorHandlerService.maxRetries);
    }

    /**
     * TODO Document this!
     * @private
     * @param {*} error
     * @returns {Promise<any>}
     * @memberof ErrorHandlerService
     */
    public static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
