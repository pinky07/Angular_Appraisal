import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

import { MenuService } from '../service/menu.service';

/**
 * Protects the /adminDashboard route
 * @author Manuel Yepez
 * @export
 * @class AdminDashboardGuard
 * @implements {CanActivate}
 */
@Injectable()
export class AdminDashboardGuard implements CanLoad {

  /**
   * Creates an instance of AppraisalDashboardGuard.
   * @param {MenuService} menuService Menu helper service
   * @memberof AdminDashboardGuard
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
  public canLoad(route: Route): boolean {
    // To implement this logic we're relying on whether the menu item for the Admin Dashboard is enabled
    return this.menuService.isAdminDashboardEnabled();
  }
}
