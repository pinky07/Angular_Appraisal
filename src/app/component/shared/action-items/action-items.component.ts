import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActionItem } from '../../../model/action-item/action-item';
import { ActionItemService } from '../../../service/action-item.service';

@Component({
    selector: 'app-action-items',
    templateUrl: './action-items.component.html',
    styleUrls: [
        './action-items.component.scss'
    ]
})
export class ActionItemsComponent implements OnInit {

    public actionItems: ActionItem[];

    constructor(
        private actionItemsService: ActionItemService,
        private router: Router
    ) {
        this.actionItems = [];
    }

    public ngOnInit(): void {
        this.actionItemsService
            .getActionItems()
            .subscribe(
            actionItems => this.actionItems = actionItems,
            error => console.error(error)
            );
    }

    private navigate2ActionItem(path: string[]): void {
        this.router.navigate(path);
    }
}
