import 'rxjs/add/operator/catch';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../service/auth.service';
import { MenuService } from '../../service/menu.service';

/**
 * @export
 * @class MenuComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    private mentoringDashboardEnabled: boolean;
    private appraisalDashboardEnabled: boolean;
    private adminDashboardEnabled: boolean;

    private mentoringDashboardSet: boolean;
    private appraisalDashboardSet: boolean;
    private adminDashboardSet: boolean;

    /**
     * Creates an instance of MenuComponent.
     * @memberof MenuComponent
     */
    constructor(
        public authService: AuthService,
        public menuService: MenuService,
    ) { }

    /**
     * @memberof MenuComponent
     */
    public ngOnInit() {
    }

    /**
     * Will return false until the user is logged in and the menu service can be queried.
     * @returns {boolean} true if the tab is enabled
     * @memberof MenuComponent
     */
    public isMentoringDashboardEnabled(): boolean {
        if (this.authService.isLoggedIn() && !this.mentoringDashboardSet) {
            const mentoringDashboard: Observable<boolean> | boolean = this.menuService.isMentoringDashboardEnabled();
            if (typeof (mentoringDashboard) === 'boolean') {
                this.mentoringDashboardSet = true;
                this.mentoringDashboardEnabled = mentoringDashboard;
            } else if (mentoringDashboard instanceof Observable) {
                mentoringDashboard
                    .subscribe(result => {
                        this.mentoringDashboardSet = true;
                        this.mentoringDashboardEnabled = result;
                    }, error => {
                        this.mentoringDashboardSet = true;
                        this.mentoringDashboardEnabled = false;
                    });
            }
        }
        return this.mentoringDashboardEnabled;
    }

    /**
     * Will return false until the user is logged in and the menu service can be queried.
     * @returns {boolean} true if the tab is enabled
     * @memberof MenuComponent
     */
    public isAppraisalDashboardEnabled(): boolean {
        if (this.authService.isLoggedIn() && !this.appraisalDashboardSet) {
            const appraisalDashboard: Observable<boolean> | boolean = this.menuService.isAppraisalDashboardEnabled();
            if (typeof (appraisalDashboard) === 'boolean') {
                this.appraisalDashboardSet = true;
                this.appraisalDashboardEnabled = appraisalDashboard;
            } else if (appraisalDashboard instanceof Observable) {
                appraisalDashboard
                    .subscribe(result => {
                        this.appraisalDashboardSet = true;
                        this.appraisalDashboardEnabled = result;
                    }, error => {
                        this.appraisalDashboardSet = true;
                        this.appraisalDashboardEnabled = false;
                    });
            }
        }
        return this.appraisalDashboardEnabled;
    }

    /**
     * Will return false until the user is logged in and the menu service can be queried.
     * @returns {boolean} true if the tab is enabled
     * @memberof MenuComponent
     */
    public isAdminDashboardEnabled(): boolean {
        if (this.authService.isLoggedIn() && !this.adminDashboardSet) {
            const adminDashboard: Observable<boolean> | boolean = this.menuService.isAdminDashboardEnabled();
            if (typeof (adminDashboard) === 'boolean') {
                this.adminDashboardSet = true;
                this.adminDashboardEnabled = adminDashboard;
            } else if (adminDashboard instanceof Observable) {
                adminDashboard
                    .subscribe(result => {
                        this.adminDashboardSet = true;
                        this.adminDashboardEnabled = result;
                    }, error => {
                        this.adminDashboardSet = true;
                        this.adminDashboardEnabled = false;
                    });
            }
        }
        return this.adminDashboardEnabled;
    }
}
