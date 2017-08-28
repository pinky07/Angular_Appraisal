import { Location } from '@angular/common';
import { Component } from '@angular/core';

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
