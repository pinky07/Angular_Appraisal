import {Component, OnDestroy, OnInit} from '@angular/core';

import {AlertService} from '../../service/alert.service';
import {TitleService} from '../../service/title.service';
import {Employee} from '../../model/employee/employee';

/**
 * Shows the Admin dashboard.
 * @author Rubén Jiménez
 * @author Manuel Yepez
 * @export
 * @class AdminDashboardComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

  public mentor: Employee;

  public constructor(
      private alertService: AlertService,
      private titleService: TitleService,
  ) { }

  public ngOnInit(): void {
      // this.alertService.warning('Unimplemented', 'Admin dashboard hasn\'t been implemented yet');
  }

  public ngOnDestroy(): void {
      // this.alertService.dismissAll();
  }

  setMentor(item: Employee) {
    this.mentor = item;
  }
}
