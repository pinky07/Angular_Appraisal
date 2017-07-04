import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    private mentoringDashboardEnabled: boolean;

    constructor() {
        this.mentoringDashboardEnabled = false;
    }

    public setMentoringDashboardEnabled(enabled: boolean) {
        this.mentoringDashboardEnabled = enabled;
    }

    public isMentoringDashboardEnabled(): boolean {
        return this.mentoringDashboardEnabled;
    }
}
