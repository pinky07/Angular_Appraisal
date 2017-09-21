import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Section } from '../../../core/model/backend/section';

@Component({
    selector: 'app-section-comment',
    templateUrl: './section-comment.component.html',
    styleUrls: [
        './section-comment.component.scss'
    ]
})
export class SectionCommentComponent implements OnInit, OnDestroy {

    @Input()
    public section: Section;

    public constructor(
    ) { }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
    }
}
