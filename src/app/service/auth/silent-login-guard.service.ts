import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

/**
 * TODO Document this!
 * @author Ruben Jimenez
 * @export
 * @class SilentLoginGuard
 * @implements {CanActivate}
 */
@Injectable()
export class SilentLoginGuard implements CanActivate {

    /**
     * Creates an instance of SilentLoginGuard.
     * @param {AuthService} authService
     * @param {Router} router
     * @memberof SilentLoginGuard
     */
    public constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    /**
     * TODO Document this!
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {boolean}
     * @memberof SilentLoginGuard
     */
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkLogin(url);
    }

    /**
     * TODO Document this!
     * @private
     * @param {string} url
     * @returns {boolean}
     * @memberof SilentLoginGuard
     */
    private checkLogin(url: string): boolean {
        const isLoggedIn: boolean = this.authService.isLoggedIn();
        if (!isLoggedIn) {
            this.authService.setRedirectUrl(url);
            this.authService.authorize();
        }
        return isLoggedIn;
    }
}
