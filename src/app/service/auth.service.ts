import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

import { environment } from '../../environments/environment';
import { ErrorHandlerService } from './error-handler.service';

/**
 * TODO Document this!
 * @author Ruben Jimenez
 * @author Manuel Yepez
 * @export
 * @class AuthService
 */
@Injectable()
export class AuthService {

    private loggedIn = false;
    private redirectUrl = '/';

    private oauth2Url = environment.oauth2Url;
    private oauth2ClientId = 'app';
    private oauth2ClientSecret = 'app-secret-password';
    private oauth2Scope = 'EMPLOYEE+APPRAISAL';
    // This should be the URL of this application
    private oauth2RedirectURI = environment.oauth2Callback;
    private oauth2ResponseType = 'code';
    private oauth2GrantType = 'authorization_code';

    private jwtHelper: JwtHelper = new JwtHelper();

    /**
     * Creates an instance of AuthService.
     * @param {Router} router
     * @param {Http} http
     * @memberof AuthService
     */
    public constructor(
        private router: Router,
        private http: Http
    ) { }

    /**
     * TODO Document this!
     * @memberof AuthService
     */
    public authorize() {

        // TODO This can be further optimized if we retrieve the access token from the local storage!!!!
        // In other words, we have to check if the user has logged in before and if the token is still active

        // Build URL
        const url: string = this.oauth2Url + '/oauth/authorize?'
            + 'client_id=' + this.oauth2ClientId + '&'
            + 'scope=' + this.oauth2Scope + '&'
            + 'state=' + this.generateStateValue() + '&'
            + 'redirect_uri=' + this.oauth2RedirectURI + '&'
            + 'response_type=' + this.oauth2ResponseType;

        // Force navigation to authorize URL
        window.location.href = url;
    }

    /**
     * The state should be the same as the one that should be randomly generated by this component.
     * Though remember that when the Browser redirects to the callback the application will actually
     * reload itself, so that state can't be saved in a local variable. It has to be saved in the browser's
     * local storage or a cookie.
     *
     * @param code Document this!
     * @param state Document this!
     */
    public getToken(code: string, state: string) {

        if (this.compareStateValue(state)) {
            const url: string =
                this.oauth2Url + '/oauth/token';

            const query: string =
                'client_id=' + this.oauth2ClientId + '&'
                + 'client_secret=' + this.oauth2ClientSecret + '&'
                + 'redirect_uri=' + this.oauth2RedirectURI + '&'
                + 'grant_type=' + this.oauth2GrantType + '&'
                + 'state=' + state + '&'
                + 'code=' + code;

            const headers: Headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Authorization', 'Basic ' + btoa(this.oauth2ClientId + ':' + this.oauth2ClientSecret));

            const options = new RequestOptions({ headers: headers });

            return this.http.post(url, query, options).subscribe(
                response => {

                    // Retrieve and decode Access Token
                    const accessTokenString = response.json().access_token;
                    const accessTokenDecoded = this.jwtHelper.decodeToken(accessTokenString);
                    // console.log('Access Token:');
                    // console.log(accessTokenDecoded);

                    // Retrieve and decode Refresh Token
                    const refreshTokenString = response.json().refresh_token;
                    const refreshTokenDecoded = this.jwtHelper.decodeToken(refreshTokenString);
                    // console.log('Refresh Token:');
                    // console.log(refreshTokenDecoded);

                    // Saves the token in local storage
                    localStorage.setItem('accessToken', accessTokenString);
                    localStorage.setItem('refreshToken', refreshTokenString);

                    // Save additional user information in local storage
                    localStorage.setItem('userEmail', accessTokenDecoded.user_name);
                    localStorage.setItem('userFirstName', accessTokenDecoded.first_name);
                    localStorage.setItem('userLastName', accessTokenDecoded.last_name);

                    // Indicate that the user has successfully logged in the application
                    this.setLoggedIn(true);

                    // Redirect the user to the Employee Dashboard
                    // console.log('Redirecting to: ' + this.getRedirectUrl());
                    this.router.navigate([this.getRedirectUrl()]);
                },
                ErrorHandlerService.handleError
            );
        } else {
            console.error('Attack alert!');
            console.error('An state different than the one sent to the server was received!');
            // TODO Decide what should happpen if the state values are not equal since this would mean an attacker is trying to steal a token
            return null;
        }
    }

    /**
     * Generates a random value for the state and it saves it into the local storage.
     * @returns {string} Random value generated for the state
     * @memberof AuthService
     */
    public generateStateValue(): string {
        const state = this.randomString(256);
        localStorage.setItem('state', state);
        return state;
    }

    /**
     * Generates a random string value
     * @private
     * @param {number} length Length of the desired random string
     * @returns Random string
     * @memberof AuthService
     */
    private randomString(length: number) {
        const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const random = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(random, random + 1);
        }
        return randomString;
    }

    /**
     * Returns true if the state saved in local storage is equal to the one sent as parameter
     * @param {string} state State to the compare with the one saved
     * @returns {boolean} True if both states are equal
     * @memberof AuthService
     */
    public compareStateValue(state: string): boolean {
        return localStorage.getItem('state') === state;
    }

    /**
     * Retrieves a new Access Token from the Authorization Server.
     * @memberof AuthService
     */
    public refreshToken(): void {
        // TODO Implement this logic!
    }

    /**
     * Returns the current Access Token encoded.
     * DON'T retrieve the accessToken directly through the local storage.
     * @returns {string} Current Access Token encoded
     * @memberof AuthService
     */
    public encodedAccessToken(): string {
        if (this.hasAccessTokenExpired()) {
            this.refreshToken();
        }
        // TODO Ensure that no other place in the app is accessing the token from local storage
        return localStorage.getItem('accessToken');
    }

    /**
     * Returns the current Access Token decoded.
     * DON'T retrieve the accessToken directly through the local storage.
     * @returns {*} Current Access Token decoded
     * @memberof AuthService
     */
    public decodedAccessToken(): any {
        if (this.hasAccessTokenExpired()) {
            this.refreshToken();
        }
        // TODO Ensure that no other place in the app is accessing the token from local storage
        return this.jwtHelper.decodeToken(localStorage.getItem('accessToken'));
    }

    /**
     * Returns true if the current access token has expired.
     * @private
     * @returns {boolean} True if the current access token expired
     * @memberof AuthService
     */
    private hasAccessTokenExpired(): boolean {
        // TODO Implement this logic!
        return false;
    }

    /**
     * Returns a RequestOptions object with the token currently in use.
     * @returns {RequestOptions} A RequestOptions object with the current token
     * @memberof AuthService
     */
    public getOptionsWithToken(): RequestOptions {
        const headers = new Headers({ 'Authorization': 'Bearer ' + this.encodedAccessToken() });
        return new RequestOptions({ headers: headers });
    }

    /**
     * TODO Document this!
     * @memberof AuthService
     */
    public logout(): void {
        this.loggedIn = false;
    }

    /**
     * TODO Document this!
     * @param {boolean} loggedIn
     * @memberof AuthService
     */
    public setLoggedIn(loggedIn: boolean) {
        this.loggedIn = loggedIn;
    }

    /**
     * TODO Document this!
     * @returns {boolean}
     * @memberof AuthService
     */
    public isLoggedIn(): boolean {
        // TODO Here we should check if there is an access token in local storage.
        // If there is, and it hasn't expired, the user is already logged in.
        return this.loggedIn;
    }

    /**
     * Saves the URL previous to the authentication redirect.
     * @param {string} url Redirect URL
     * @memberof AuthService
     */
    public setRedirectUrl(url: string): void {
        localStorage.setItem('redirectURL', url);
    }


    /**
     * Returns the URL previous to the authentication redirect.
     * @returns {string} Redirect URL
     * @memberof AuthService
     */
    public getRedirectUrl(): string {
        return localStorage.getItem('redirectURL')
    }
}
