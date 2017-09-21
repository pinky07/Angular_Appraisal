import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth.service';

/**
 * TODO Document this!
 * @export
 * @class CallbackComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-login-callback',
    templateUrl: './login-callback.component.html',
})
export class LoginCallbackComponent implements OnInit {

    private code: string;
    private state: string;

    /**
     * Creates an instance of CallbackComponent.
     * @param {AuthService} authService
     * @param {ActivatedRoute} route
     * @memberof CallbackComponent
     */
    public constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
    ) {
        // This ensures that the code and state are not saved to the browser's history
        this.location.replaceState('callback');
    }


    /**
     * @memberof CallbackComponent
     */
    public ngOnInit(): void {
        this.route.queryParams
            .subscribe(params => {
                this.code = params['code'];
                this.state = params['state'];
                if (!this.code || !this.state) {
                    // If no code or state are received, navigate to the Employee Dashboard
                    // This will force the user to authenticate again
                    this.router.navigate(['/employeeDashboard'])
                } else {
                    this.authService.getToken(this.code, this.state);
                }
            });
    }
}
