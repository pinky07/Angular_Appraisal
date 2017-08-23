import {Component, OnInit} from '@angular/core';
import {EmployeeRelationshipService} from '../../service/employee-relationship.service';
import {Employee} from '../../model/employee/employee';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-add-references',
  templateUrl: './add-references.component.html',
  styleUrls: ['./add-references.component.scss']
})
export class AddReferencesComponent implements OnInit {
  public model: Employee;
  public references: Employee[];

  /* searchMentee = (text$: Observable<Employee>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.firstName.length < 4 ? [] : this.mentees
        .filter(m => m.firstName.toLowerCase().indexOf(term.firstName.toLowerCase()) > -1).slice(0, 10)); */

  constructor(
    private employeeService: EmployeeService,
    private employeeRelationshipService: EmployeeRelationshipService
  ) { }

  ngOnInit() {
    // this.employeeService.getAllEmployees().map(employees => this.mentees = employees);
  }

  addReference(): void {

  }

}
