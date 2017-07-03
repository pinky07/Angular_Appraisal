import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent {

    public constructor(
        private location: Location
    ) { }

    public goBack(): void {
        this.location.back();
    }
}
