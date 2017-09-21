import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { Alert } from '../../../core/model/frontend/alert';
import { AlertService } from '../../../core/service/alert.service';

/**
 * TODO Document this!
 * @export
 * @class AlertComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    animations: [
        trigger('flyInOut', [
            state(
                'in',
                style(
                    {
                        'transform': 'translateX(0)',
                        'height': '*',
                        'opacity': 1
                    }
                )
            ),
            transition(
                'void => *',
                [
                    style(
                        {
                            'transform': 'translateX(-100%)',
                            'height': 0,
                            'opacity': 0
                        }
                    ),
                    animate('300ms ease-in')
                ]
            ),
            transition(
                '* => void',
                [
                    animate(
                        '300ms ease-out',
                        style(
                            {
                                'transform': 'translateX(100%)',
                                'height': 0,
                                'opacity': 0,
                            }
                        )
                    )
                ]
            )
        ])
    ]
})
export class AlertComponent implements OnInit {

    public alerts: Alert[];
    private id: number;

    /**
     * Creates an instance of AlertComponent.
     * @memberof AlertComponent
     */
    public constructor(
        private alertService: AlertService,
    ) {
        this.alerts = [];
        this.id = 1;
    }

    /**
     * TODO Document this!
     * @memberof AlertComponent
     */
    public ngOnInit() {
        this.alertService.registerComponent(this);
    }

    /**
     * TODO Document this!
     * @param {string} type
     * @param {string} strong
     * @param {string} text
     * @returns {Alert}
     * @memberof AlertComponent
     */
    public addAlert(type: string, strong: string, text: string): Alert {
        const alert: Alert = new Alert(this.id++, type, strong, text);
        this.alerts.push(alert);
        return alert;
    }

    /**
     * TODO Document this!
     * @param {number} id
     * @memberof AlertComponent
     */
    public dismissAlert(id: number): void {
        let index: number = -1;
        for (let i = 0; i < this.alerts.length; ++i) {
            if (this.alerts[i].id === id) {
                index = i;
            }
        }
        if (0 <= index && index < this.alerts.length) {
            this.alerts.splice(index, 1);
        }
    }

    /**
     * TODO Document this!
     * @memberof AlertComponent
     */
    public dismissAll(): void {
        this.alerts = [];
    }
}
