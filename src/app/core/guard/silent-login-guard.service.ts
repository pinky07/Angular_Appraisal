import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../service/auth.service';


/**
 * Protects all Modules. Forces the user to login prior to loading any modules.
 * @author Ruben Jimenez
 * @export
 * @class SilentLoginGuard
 * @implements {CanLoad}
 */
@Injectable()
export class SilentLoginGuard implements CanLoad, CanActivate {

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
     * @param {ActivatedRouteSnapshot} route TODO Document this!
     * @param {RouterStateSnapshot} state TODO Document this!
     * @returns {boolean} TODO Document this!
     * @memberof SilentLoginGuard TODO Document this!
     */
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        console.log('canActivate', 'URL', url);
        return this.checkLogin(url);
    }

    /**
     * TODO Document this!
     * @param {Route} route TODO Document this!
     * @returns {boolean} TODO Document this!
     * @memberof SilentLoginGuard TODO Document this!
     */
    public canLoad(route: Route): Observable<boolean> | boolean {
        const url = `/${route.path}`;
        console.log('canLoad', 'URL', url);
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
