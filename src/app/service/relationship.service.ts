import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';
import {Relationship} from '../model/employee/relationship';
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
export class RelationshipService {

  private maxRetries: number = environment.maxRetries;
  private relationshipUrl = environment.relationshipUrl;
  private relationships: Observable<Relationship[]>;

  constructor(private http: Http,
              private authService: AuthService) { }

  /**
   * Fetches Relationship types by Id.
   *
   * @returns {Observable<Relationship>}
   */
  public getRelationshipById(id: number): Observable<Relationship> {
    const url = `${this.relationshipUrl}/${id}`;
    return this.http.get(url, this.authService.getOptionsWithToken())
      .retry(this.maxRetries)
      .map(response => response.json() as Relationship)
      .catch(ErrorHandlerService.handleError);
  }

  /**
   * Fetches all Relationship types (excluding SELF, MENTOR for now).
   * Since the relationships are not expected to change frequently, this service is cached.
   *
   * @returns {Observable<Relationship[]>}
   */
  public getRelationships(): Observable<Relationship[]> {
    // Cached call
    if (!this.relationships) {
      this.relationships = this.http.get(this.relationshipUrl, this.authService.getOptionsWithToken())
        .retry(this.maxRetries)
        .map(response => response.json() as Relationship[])
        .publishReplay(1)
        .refCount()
        .catch(ErrorHandlerService.handleError);
    }
    return this.relationships;
  }
}
