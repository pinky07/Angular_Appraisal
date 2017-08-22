import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';
import {EmployeeRelationship} from '../model/employee/employee-relationship';
import {ErrorHandlerService} from './error-handler.service';
import {Observable} from 'rxjs/Observable';

/**
 * Communicates with /employees/relationships endpoints.
 *
 * @author Manuel Yepez
 */
@Injectable()
export class EmployeeRelationshipService {

  private maxRetries: number = environment.maxRetries;
  private employeeUrl = environment.employeeUrl;

  constructor(private http: Http,
              private authService: AuthService) {}

  /**
   *
   * @param {number} id
   * @param {EmployeeRelationship} employeeRelationship
   * @returns {Observable<void>}
   */
  public addRelationship(id: number, employeeRelationship: EmployeeRelationship): Observable<void> {
    const url = `${this.employeeUrl}/${id}/relationships`;
    return this.http
      .put(url, JSON.stringify(employeeRelationship), this.authService.getOptionsWithToken())
      .retry(this.maxRetries)
      .catch(ErrorHandlerService.handleError);
  }
}
