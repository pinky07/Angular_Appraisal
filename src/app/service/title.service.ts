import { Injectable } from '@angular/core';

import { HeaderComponent } from '../layout/header/header.component';

/**
 * Provides a way to modify the Application Title
 * @author Ruben Jimenez
 * @export
 * @class TitleService
 */
@Injectable()
export class TitleService {

    private headerComponent: HeaderComponent;

    /**
     * Registers a HeaderComponent which will show the application title
     * @param {HeaderComponent} headerComponent
     * @memberof TitleService
     */
    public registerComponent(headerComponent: HeaderComponent) {
        this.headerComponent = headerComponent;
    }

    /**
     * Sets the default title for the application. When you modify the title from a compoenent,
     * set back the original title in the compoenent's onDestroy event with this method.
     * @memberof TitleService
     */
    public setDefaultTitle(): void {
        this.setTitle('Appraisal Tool');
    }

    /**
     * Change the application's title with this method. Remember to set it back in the compoenent's onDestroy
     * event.
     * @param {string} title
     * @memberof TitleService
     */
    public setTitle(title: string) {
        if (this.headerComponent) {
            this.headerComponent.setTitle(title);
        }
    }
}
