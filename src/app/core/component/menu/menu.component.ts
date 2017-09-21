import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../service/menu.service';

/**
 * @export
 * @class MenuComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    /**
     * Creates an instance of MenuComponent.
     * @memberof MenuComponent
     */
    constructor(
        public menuService: MenuService
    ) { }

    /**
     * @memberof MenuComponent
     */
    public ngOnInit() {
    }
}
