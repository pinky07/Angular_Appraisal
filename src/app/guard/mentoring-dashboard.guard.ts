import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { MenuService } from '../service/menu.service';

/**
 * Protects the /mentoringDashboard route
 * @author Ruben Jimenez
 * @export
 * @class MentoringDashboardGuard
 * @implements {CanActivate}
 */
@Injectable()
export class MentoringDashboardGuard implements CanActivate {

    /**
     * Creates an instance of MentoringDashboardGuard.
     * @param {MenuService} menuService Menu helper service
     * @memberof MentoringDashboardGuard
     */
    public constructor(
        private menuService: MenuService
    ) { }

    /**
     * Whether the route /mentoringDashboard is enabled.
     * @param {ActivatedRouteSnapshot} route TODO Document this!
     * @param {RouterStateSnapshot} state TODO Document this!
     * @returns {boolean} True if the route can be accessed
     * @memberof SilentLoginGuard
     */
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // To implement this logic we're relying on whether the menu item for the Mentoring Dashboard is enabled
        return this.menuService.isMentoringDashboardEnabled();
    }
}
