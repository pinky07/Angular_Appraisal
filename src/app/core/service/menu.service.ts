import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../model/backend/employee';
import { AuthService } from './auth.service';
import { MeService } from './me.service';

/**
 * Logic that decides whether certain UI menu tabs should be enabled or not.
 * @author Rubén Jiménez
 * @export
 * @class MenuService
 * @implements {OnInit}
 */
@Injectable()
export class MenuService {

    // Minimum time between two calls to Me service
    private static readonly TOLERANCE_MS = 100;

    private currentEmployee: Employee;

    private appraisalDashboardEnabled: boolean;
    private mentoringDashboardEnabled: boolean;
    private adminDashboardEnabled: boolean;

    private appraisalDashboardSet: boolean;
    private mentoringDashboardSet: boolean;
    private adminDashboardSet: boolean;

    // Helps preventing multiple calls to Me Service
    private future = Date.now();

    /**
     * Creates an instance of MenuService. Uses the MeService to identify the logged in user and
     * enable the correspondant menu tabs.
     * @param {MeService} meService Me service.
     * @memberof MenuService
     */
    constructor(
        private authService: AuthService,
        private meService: MeService
    ) {
        this.appraisalDashboardEnabled = false;
        this.mentoringDashboardEnabled = false;
        this.adminDashboardEnabled = false;
    }

    /**
     * To enable/disable the Mentoring Dashboard.
     * Keep this method private to ensure that this service is self contain and can decide on its own.
     * @private
     * @param {boolean} enabled Whether to enable or disable
     * @memberof MenuService
     */
    private setMentoringDashboardEnabled(enabled: boolean) {
        this.mentoringDashboardSet = true;
        this.mentoringDashboardEnabled = enabled;
    }


    /**
     * Whether the Mentoring Dashboard should be enabled.
     * @returns {boolean} True if the Mentoring Dashboard should be enabled
     * @memberof MenuService
     */
    public isMentoringDashboardEnabled(): Observable<boolean> | boolean {
        if (this.mentoringDashboardSet) {
            return this.mentoringDashboardEnabled;
        } else {
            return this.meService
                .getMe()
                .map(employee => {
                    this.mentoringDashboardEnabled = employee.isMentor;
                    return this.mentoringDashboardEnabled;
                });
        }
    }

    /**
     * To enable/disable the Appraisal Dashboard.
     * Keep this method private to ensure that this service is self contain and can decide on its own.
     * @private
     * @param {boolean} enabled Whether to enable or disable
     * @memberof MenuService
     */
    private setAppraisalDashboardEnabled(enabled: boolean) {
        this.appraisalDashboardSet = true;
        this.appraisalDashboardEnabled = enabled;
    }

    /**
     * Whether the Appraisal Dashboard should be enabled.
     * @returns {boolean} True if the Appraisal Dashboard should be enabled
     * @memberof MenuService
     */
    public isAppraisalDashboardEnabled(): Observable<boolean> | boolean {
        return true;
    }

    /**
     * To enable/disable the Admin Dashboard.
     * Keep this method private to ensure that this service is self contain and can decide on its own.
     * @private
     * @param {boolean} enabled Whether to enable or disable
     * @memberof MenuService
     */
    private setAdminDashboardEnabled(enabled: boolean) {
        this.adminDashboardEnabled = enabled;
        this.adminDashboardSet = true;
    }

    /**
     * Whether the Appraisal Dashboard should be enabled.
     * @returns {boolean} True if the Appraisal Dashboard should be enabled
     * @memberof MenuService
     */
    public isAdminDashboardEnabled(): Observable<boolean> | boolean {
        if (this.adminDashboardSet) {
            return this.adminDashboardEnabled;
        } else {
            return this.meService
                .getMe()
                .map(employee => {
                    this.adminDashboardEnabled = employee.isAdmin;
                    return this.adminDashboardEnabled;
                });
        }
    }
}
