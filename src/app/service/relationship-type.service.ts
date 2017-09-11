import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';
import {RelationshipType} from '../model/employee/relationshipType';
import {ErrorHandlerService} from './error-handler.service';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishReplay';

/**
 * Communicates with /relationships endpoints.
 *
 * @author Manuel Yepez
 */
@Injectable()
export class RelationshipTypeService {

  private maxRetries: number = environment.maxRetries;
  private relationshipUrl = environment.relationshipUrl;
  private relationships: Observable<RelationshipType[]>;

  constructor(private http: Http,
              private authService: AuthService) { }

  /**
   * Fetches RelationshipType types by Id.
   *
   * @returns {Observable<RelationshipType>}
   */
  public getRelationshipTypeById(id: number): Observable<RelationshipType> {
    const url = `${this.relationshipUrl}/${id}`;
    return this.http.get(url, this.authService.getOptionsWithToken())
      .retry(this.maxRetries)
      .map(response => response.json() as RelationshipType)
      .catch(ErrorHandlerService.handleError);
  }

  /**
   * Fetches all RelationshipType types (excluding SELF, MENTOR for now).
   * Since the relationships are not expected to change frequently, this service is cached.
   *
   * @returns {Observable<RelationshipType[]>}
   */
  public getRelationshipTypes(): Observable<RelationshipType[]> {
    // Cached call
    if (!this.relationships) {
      this.relationships = this.http.get(this.relationshipUrl, this.authService.getOptionsWithToken())
        .retry(this.maxRetries)
        .map(response => response.json() as RelationshipType[])
        .publishReplay(1)
        .refCount()
        .catch(ErrorHandlerService.handleError);
    }
    return this.relationships;
  }
}
