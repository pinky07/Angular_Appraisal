import { Injectable } from '@angular/core';

import { AlertComponent } from '../../layout/alert/alert.component';
import { Alert } from '../../model/alert/alert';

/**
 * TODO Document this!
 * @author Ruben Jimenez
 * @export
 * @class AlertService
 */
@Injectable()
export class AlertService {

    private alertComponent: AlertComponent;

    /**
     * TODO Document this!
     * @param {AlertComponent} alertComponent
     * @memberof AlertService
     */
    public registerComponent(alertComponent: AlertComponent) {
        this.alertComponent = alertComponent;
    }

    /**
     * TODO Document this!
     * @param {string} strong Bold text
     * @param {string} text Text
     * @memberof AlertService
     */
    public success(strong: string, text: string): Alert {
        return this.addAlert('alert-success', strong, text);
    }

    /**
     * TODO Document this!
     * @param {string} strong Bold text
     * @param {string} text Text
     * @memberof AlertService
     */
    public info(strong: string, text: string): Alert {
        return this.addAlert('alert-info', strong, text);
    }

    /**
     * TODO Document this!
     * @param {string} strong Bold text
     * @param {string} text Text
     * @memberof AlertService
     */
    public warning(strong: string, text: string): Alert {
        return this.addAlert('alert-warning', strong, text);
    }

    /**
     * TODO Document this!
     * @param {string} strong Bold text
     * @param {string} text Text
     * @memberof AlertService
     */
    public danger(strong: string, text: string): Alert {
        return this.addAlert('alert-danger', strong, text);
    }

    /**
     * TODO Document this!
     * @private
     * @param {string} type
     * @param {string} strong
     * @param {string} text
     * @returns {Alert}
     * @memberof AlertService
     */
    private addAlert(type: string, strong: string, text: string): Alert {
        let alert: Alert = undefined;
        if (this.alertComponent) {
            alert = this.alertComponent.addAlert(type, strong, text);
        }
        return alert;
    }

    /**
     * TODO Document this!
     * @param {Alert} alert
     * @memberof AlertService
     */
    public dismiss(alert: Alert) {
        if (this.alertComponent) {
            this.alertComponent.dismissAlert(alert.id);
        }
    }


    /**
     * TODO Document this!
     * @memberof AlertService
     */
    public dismissAll() {
        if (this.alertComponent) {
            this.alertComponent.dismissAll();
        }
    }
}
