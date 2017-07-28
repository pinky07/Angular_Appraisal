// Angular imports
import { Injectable } from '@angular/core';

/**
 * TODO Document this!
 * @author Ruben Jimenez
 * @export
 * @class TitleService
 */
@Injectable()
export class ErrorHandlerService {

    /**
     * TODO Document this!
     * @private
     * @param {*} error
     * @returns {Promise<any>}
     * @memberof EmployeeService
     */
    public static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
