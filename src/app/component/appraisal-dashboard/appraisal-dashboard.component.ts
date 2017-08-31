import { Component, OnDestroy, OnInit } from '@angular/core';

import { TitleService } from '../../service/title.service';

@Component({
    selector: 'app-appraisal-dashboard',
    templateUrl: './appraisal-dashboard.component.html',
    styleUrls: [
        './appraisal-dashboard.component.scss'
    ]
})
export class AppraisalDashboardComponent implements OnInit, OnDestroy {

    public constructor(
        private titleService: TitleService
    ) { }

    public ngOnInit() {
        this.titleService.setTitle('Appraisal Dashboard');
    }

    public ngOnDestroy(): void {
        this.titleService.setDefaultTitle();
    }
}
