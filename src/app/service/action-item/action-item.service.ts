import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActionItem } from '../../model/action-item/action-item';
import { Employee } from '../../model/employee/employee';
import { ACTION_ITEMS } from './action-item.mock';

@Injectable()
export class ActionItemService {

    public getActionItems(): Observable<ActionItem[]> {
        return Observable.of(ACTION_ITEMS);
    }
}
