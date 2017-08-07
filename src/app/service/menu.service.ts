import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    private appraisalDashboardEnabled: boolean;
    private mentoringDashboardEnabled: boolean;

    constructor() {
        this.appraisalDashboardEnabled = true;
        this.mentoringDashboardEnabled = false;
    }

    public setMentoringDashboardEnabled(enabled: boolean) {
        this.mentoringDashboardEnabled = enabled;
    }

    public isMentoringDashboardEnabled(): boolean {
        return this.mentoringDashboardEnabled;
    }

    public setAppraisalDashboardEnabled(enabled: boolean) {
      this.appraisalDashboardEnabled = enabled;
    }

    public isAppraisalDashboardEnabled(): boolean {
      return this.appraisalDashboardEnabled;
    }
}
