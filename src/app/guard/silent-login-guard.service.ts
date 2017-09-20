import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../service/auth.service';

/**
 * TODO Document this!
 * @author Ruben Jimenez
 * @export
 * @class SilentLoginGuard
 * @implements {CanActivate}
 */
@Injectable()
export class SilentLoginGuard implements CanLoad {

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
    public canLoad(route: Route): boolean {
        console.log('Can Load');
        const url: string = route.path;
        // console.log('URL', url);
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
            // console.log('Redirect URL:' + url);
            this.authService.setRedirectUrl(url);
            this.authService.authorize();
        }
        return isLoggedIn;
    }
}
