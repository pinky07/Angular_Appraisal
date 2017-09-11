import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';

import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AuthService} from './auth.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Appraisal} from '../model/appraisal/appraisal';
import {ErrorHandlerService} from './error-handler.service';

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
  private meAppraisalsUrl = environment.meUrl + '/appraisals';

  constructor(
    private http: Http,
    private authService: AuthService
  ) {}

  /**
   * Obtains all appraisals in which the logged user has taken part.
   * @returns {Observable<Appraisal[]>}
   */
  public getMeAppraisals(): Observable<Appraisal[]> {
    return this.http
      .get(this.meAppraisalsUrl, this.authService.getOptionsWithToken())
      .retry(this.maxRetries)
      .map(response => response.json() as Appraisal[])
      .catch(ErrorHandlerService.handleError);
  }
}
