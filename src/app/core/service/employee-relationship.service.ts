import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { EmployeeRelationship } from '../model/backend/employee-relationship';
import { AuthService } from './auth.service';
import { ErrorHandlerService } from './error-handler.service';

/**
 * Communicates with /employees/relationships endpoints.
 *
 * @author Manuel Yepez
 */
@Injectable()
export class EmployeeRelationshipService {

  private maxRetries: number = environment.maxRetries;
  private retryDelay: number = environment.retryDelay;
  private employeeUrl = environment.employeeUrl;

  constructor(private http: Http,
    private authService: AuthService) { }

  /**
   * Post to the /employees/:id/relationships endpoint to create a new EmployeeRelationship.
   * @param {number} id Employee Id
   * @param employeeRelationship Employee Relationship object
   * @returns {Observable<EmployeeRelationship>} New EmployeeRelationship
   * @memberof EmployeeRelationshipService
   */
  public postEmployeesByIdRelationships(id: number, employeeRelationship: EmployeeRelationship): Observable<EmployeeRelationship> {
    const url = `${this.employeeUrl}/${id}/relationships`;
    return this.http
      .post(url, employeeRelationship, this.authService.getOptionsWithToken())
      .retryWhen(ErrorHandlerService.retry)
      .map(response => response.json().data as EmployeeRelationship)
      .catch(ErrorHandlerService.handleError);
  }

  /**
   * Delete to the /employees/:id/relationships/:id endpoint to delete an existing EmployeeRelationship.
   * @param {number} employeeId Employee Id
   * @param {number} relationshipId EmployeeRelationship Id
   * @memberof EmployeeRelationshipService
   */
  public deleteEmployeesByIdRelationshipsById(employeeId: number, relationshipId: number): Observable<any> {
    const url = `${this.employeeUrl}/${employeeId}/relationships/${relationshipId}`;
    return this.http
      .delete(url, this.authService.getOptionsWithToken())
      .retryWhen(ErrorHandlerService.retry)
      .catch(ErrorHandlerService.handleError);
  }
}
