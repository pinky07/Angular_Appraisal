import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MenuService } from '../service/menu.service';

/**
 * Protects the Mentoring Module.
 * @author Ruben Jimenez
 * @export
 * @class MentoringModuleCanLoadGuard
 * @implements {CanLoad}
 */
@Injectable()
export class MentoringModuleCanLoadGuard implements CanLoad {

    /**
     * Creates an instance of MentoringModuleCanLoadGuard.
     * @param {MenuService} menuService Menu helper service
     * @memberof MentoringModuleCanLoadGuard
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
    public canLoad(route: Route): Observable<boolean> | boolean {
        // To implement this logic we're relying on whether the menu item for the Mentoring Dashboard is enabled
        return this.menuService.isMentoringDashboardEnabled();
    }
}
