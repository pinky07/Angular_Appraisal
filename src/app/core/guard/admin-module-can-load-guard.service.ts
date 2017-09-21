import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MenuService } from '../service/menu.service';

/**
 * Protects the Admin Module.
 * @author Manuel Yepez
 * @author Rubén Jiménez
 * @export
 * @class AdminModuleCanLoadGuard
 * @implements {CanLoad}
 */
@Injectable()
export class AdminModuleCanLoadGuard implements CanLoad {

  /**
   * Creates an instance of AppraisalDashboardGuard.
   * @param {MenuService} menuService Menu helper service
   * @memberof AdminModuleCanLoadGuard
   */
  public constructor(
    private menuService: MenuService
  ) { }

  /**
   * Whether the route /adminDashboard is enabled.
   * @param {ActivatedRouteSnapshot} route TODO Document this!
   * @param {RouterStateSnapshot} state TODO Document this!
   * @returns {boolean} True if the route can be accessed
   * @memberof SilentLoginGuard
   */
  public canLoad(route: Route): Observable<boolean> | boolean {
    // To implement this logic we're relying on whether the menu item for the Admin Dashboard is enabled
    return this.menuService.isAdminDashboardEnabled();
  }
}
