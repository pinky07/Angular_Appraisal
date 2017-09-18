import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Section } from '../../../../model/backend/section';

@Component({
    selector: 'app-section-1-to-5',
    templateUrl: './section-1-to-5.component.html',
    styleUrls: [
        './section-1-to-5.component.scss'
    ]
})
export class Section1To5Component implements OnInit, OnDestroy {

    @Input()
    public section: Section;

    public constructor(
    ) { }

    public ngOnInit(): void {
        // console.log(this.section);
    }

    public ngOnDestroy(): void {
    }
}
