import { Injectable } from '@angular/core';

import { HeaderComponent } from '../../layout/header/header.component';

/**
 * TODO Document this!
 * @author Ruben Jimenez
 * @export
 * @class TitleService
 */
@Injectable()
export class TitleService {

    private headerComponent: HeaderComponent;

    /**
     * TODO Document this!
     * @param {HeaderComponent} headerComponent
     * @memberof TitleService
     */
    public registerComponent(headerComponent: HeaderComponent) {
        this.headerComponent = headerComponent;
    }

    /**
     * TODO Document this!
     * @param {string} title
     * @memberof TitleService
     */
    public setTitle(title: string) {
        if (this.headerComponent) {
            this.headerComponent.setTitle(title);
        }
    }
}
