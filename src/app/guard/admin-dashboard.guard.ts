/**
 * Protects the /adminDashboard route
 * @author Manuel Yepez
 * @export
 * @class AdminDashboardGuard
 * @implements {CanActivate}
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {MenuService} from '../service/menu.service';

@Injectable()
export class AdminDashboardGuard implements CanActivate {

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
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // To implement this logic we're relying on whether the menu item for the Admin Dashboard is enabled
    return this.menuService.isAdminDashboardEnabled();
  }
}
