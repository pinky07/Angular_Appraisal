import { Injectable } from '@angular/core';

import { Employee } from '../model/backend/employee';
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

    private currentEmployee: Employee;
    private appraisalDashboardEnabled: boolean;
    private mentoringDashboardEnabled: boolean;
    private adminDashboardEnabled: boolean;

    /**
     * Creates an instance of MenuService. Uses the MeService to identify the logged in user and
     * enable the correspondant menu tabs.
     * @param {MeService} meService Me service.
     * @memberof MenuService
     */
    constructor(
        private meService: MeService
    ) {
        this.appraisalDashboardEnabled = false;
        this.mentoringDashboardEnabled = false;
        this.adminDashboardEnabled = false;
        this.meService
            .getMe()
            .subscribe(
            employee => this.getMeCallback(employee));
    }

    /**
     * According to the logged in employee, decides which tabs should be enabled.
     * @private
     * @param {Employee} employee Logged in employee
     * @memberof MenuService
     */
    private getMeCallback(employee: Employee) {
        this.currentEmployee = employee;
        if (this.currentEmployee) {
            this.setAppraisalDashboardEnabled(true);
            this.setMentoringDashboardEnabled(this.currentEmployee.isMentor);
            this.setAdminDashboardEnabled(this.currentEmployee.isAdmin);
        } else {
            this.setAppraisalDashboardEnabled(false);
            this.setMentoringDashboardEnabled(false);
            this.setAdminDashboardEnabled(false);
        }
    }

    /**
     * To enable/disable the Mentoring Dashboard.
     * Keep this method private to ensure that this service is self contain and can decide on its own.
     * @private
     * @param {boolean} enabled Whether to enable or disable
     * @memberof MenuService
     */
    private setMentoringDashboardEnabled(enabled: boolean) {
        this.mentoringDashboardEnabled = enabled;
    }


    /**
     * Whether the Mentoring Dashboard should be enabled.
     * @returns {boolean} True if the Mentoring Dashboard should be enabled
     * @memberof MenuService
     */
    public isMentoringDashboardEnabled(): boolean {
        return this.mentoringDashboardEnabled;
    }

    /**
     * To enable/disable the Appraisal Dashboard.
     * Keep this method private to ensure that this service is self contain and can decide on its own.
     * @private
     * @param {boolean} enabled Whether to enable or disable
     * @memberof MenuService
     */
    private setAppraisalDashboardEnabled(enabled: boolean) {
        this.appraisalDashboardEnabled = enabled;
    }

    /**
     * Whether the Appraisal Dashboard should be enabled.
     * @returns {boolean} True if the Appraisal Dashboard should be enabled
     * @memberof MenuService
     */
    public isAppraisalDashboardEnabled(): boolean {
        return this.appraisalDashboardEnabled;
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
    }

    /**
     * Whether the Appraisal Dashboard should be enabled.
     * @returns {boolean} True if the Appraisal Dashboard should be enabled
     * @memberof MenuService
     */
    public isAdminDashboardEnabled(): boolean {
        return this.adminDashboardEnabled;
    }
}
