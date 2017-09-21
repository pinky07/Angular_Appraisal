import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MenuService } from '../service/menu.service';

/**
 * Protects the Appraisal Module.
 * @author Manuel Yepez
 * @author Rubén Jiménez
 * @export
 * @class AppraisalModuleCanLoadGuard
 * @implements {CanLoad}
 */
@Injectable()
export class AppraisalModuleCanLoadGuard implements CanLoad {

  /**
   * Creates an instance of AppraisalModuleCanLoadGuard.
   * @param {MenuService} menuService Menu helper service
   * @memberof AppraisalModuleCanLoadGuard
   */
  public constructor(
    private menuService: MenuService
  ) { }

  /**
   * Whether the route /appraisalDashboard is enabled.
   * @param {ActivatedRouteSnapshot} route TODO Document this!
   * @param {RouterStateSnapshot} state TODO Document this!
   * @returns {boolean} True if the route can be accessed
   * @memberof SilentLoginGuard
   */
  public canLoad(route: Route): Observable<boolean> | boolean {
    // To implement this logic we're relying on whether the menu item for the Appraisal Dashboard is enabled
    return this.menuService.isAppraisalDashboardEnabled();
  }
}
