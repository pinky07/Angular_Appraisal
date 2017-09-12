import { EmployeeEvaluationForm } from '../model/backend/employee-evaluation-form';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Appraisal } from '../model/backend/appraisal';
import { ErrorHandlerService } from './error-handler.service';

/**
 * Communicates with /appraisals endpoints.
 * @author Manuel Yepez
 * @author Ruben Jimenez
 * @export
 * @class AppraisalService
 */
@Injectable()
export class AppraisalService {

  private maxRetries: number = environment.maxRetries;
  private meUrl = environment.meUrl;

  /**
   * Creates an instance of AppraisalService.
   * @param {Http} http Http service
   * @param {AuthService} authService Authentication service
   * @memberof AppraisalService
   */
  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  /**
   * Obtains all appraisals in which the logged user has taken part.
   * @returns {Observable<Appraisal[]>} Appraisals array Observable
   * @memberof AppraisalService
   */
  public getMeAppraisals(): Observable<Appraisal[]> {
    const url = `${this.meUrl}/appraisals`;
    return this.http
      .get(url, this.authService.getOptionsWithToken())
      .retry(this.maxRetries)
      .map(response => response.json() as Appraisal[])
      .catch(ErrorHandlerService.handleError);
  }

  /**
   * Obtains all employee evaluation forms in which the logged user has taken part.
   * 
   * @param {number} id Appraisal Id
   * @returns {Observable<EmployeeEvaluationForm[]>}  EmployeeEvaluationForm array Observable
   * @memberof AppraisalService
   */
  public getMeAppraisalsByIdForms(id: number): Observable<EmployeeEvaluationForm[]> {
    const url = `${this.meUrl}/appraisals/${id}/forms`;
    return this.http
      .get(url, this.authService.getOptionsWithToken())
      .retry(this.maxRetries)
      .map(response => response.json() as Appraisal[])
      .catch(ErrorHandlerService.handleError);
  }
}
