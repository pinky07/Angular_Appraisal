import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CollapsableCard } from '../../layout/collapsable-card/collapsable-card';
import { ActionItem } from '../../model/action-item/action-item';
import { ActionItemService } from '../../service/action-item/action-item.service';


@Component({
    selector: 'app-action-items',
    templateUrl: './action-items.component.html',
    styleUrls: [
        '../../layout/collapsable-card/collapsable-card.scss',
        './action-items.component.scss'
    ]
})
export class ActionItemsComponent extends CollapsableCard implements OnInit {

    private actionItems: ActionItem[];

    constructor(
        private actionItemsService: ActionItemService,
        private router: Router
    ) {
        super();
        this.actionItems = [];
    }

    public ngOnInit() {
        this.actionItemsService
            .getActionItems()
            .subscribe(
            actionItems => this.actionItems = actionItems,
            error => console.log(error)
            );
    }

    private navigate2ActionItem(path: string[]): void {
        this.router.navigate(path);
    }
}
