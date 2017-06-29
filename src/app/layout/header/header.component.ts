import { Component, OnInit } from '@angular/core';

import { TitleService } from '../../service/title/title.service';

/**
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    private title: string;

    /**
     * Creates an instance of HeaderComponent.
     * @memberof HeaderComponent
     */
    public constructor(
        private titleService: TitleService,
    ) { }

    /**
     * TODO Document this!
     * @memberof HeaderComponent
     */
    public ngOnInit() {
        this.setDefaultTitle();
        this.titleService.registerComponent(this);
    }

    /**
     * TODO Document this!
     * @param {string} title
     * @memberof HeaderComponent
     */
    public setTitle(title: string) {
        this.title = title
    }

    /**
     * TODO Document this!
     * @memberof HeaderComponent
     */
    public setDefaultTitle() {
        this.title = 'Appraisal Tool';
    }
}
