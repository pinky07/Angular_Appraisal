import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../service/auth.service';

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
        private route: ActivatedRoute
    ) { }


    /**
     * @memberof CallbackComponent
     */
    public ngOnInit(): void {
        this.route.queryParams
            .subscribe(params => {
                this.code = params['code'];
                this.state = params['state'];
                this.authService.getToken(this.code, this.state);
            });
    }
}
