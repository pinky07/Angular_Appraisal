import { Component, OnDestroy, OnInit } from '@angular/core';

import { Appraisal } from '../../model/appraisal/appraisal';
import { AppraisalService } from '../../service/appraisal.service';
import { TitleService } from '../../service/title.service';

@Component({
    selector: 'app-appraisal-dashboard',
    templateUrl: './appraisal-dashboard.component.html',
    styleUrls: [
        './appraisal-dashboard.component.scss'
    ]
})
export class AppraisalDashboardComponent implements OnInit, OnDestroy {

    public appraisals: Appraisal[];

    public constructor(
        private appraisalService: AppraisalService,
        private titleService: TitleService
    ) { }

    public ngOnInit() {
        this.titleService.setTitle('Appraisal Dashboard');
        this.appraisalService.getMeAppraisals()
            .subscribe(appraisals => this.appraisals = appraisals);
    }

    public ngOnDestroy(): void {
        this.titleService.setDefaultTitle();
    }
}
