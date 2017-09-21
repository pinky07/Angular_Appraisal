import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActionItem } from '../model/frontend/action-item';
import { ACTION_ITEMS } from './mock/action-item.mock';

@Injectable()
export class ActionItemService {

    public getActionItems(): Observable<ActionItem[]> {
        return Observable.of(ACTION_ITEMS);
    }
}
