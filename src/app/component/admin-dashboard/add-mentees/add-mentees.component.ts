import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as _ from 'lodash';

import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../model/employee/employee';
import {EmployeeService} from '../../../service/employee.service';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-mentees',
  templateUrl: './add-mentees.component.html',
  styleUrls: ['./add-mentees.component.scss']
})
export class AddMenteesComponent implements OnInit {

  @Input()
  public mentor: Employee;

  mentee: Employee;
  mentees: Employee[];

  // Behavior for the typeahead: Triggers after 200ms, after 3 letters and waits for changes on the input.
  searchTerm = (text$: Observable<string>) =>
    text$
      .debounceTime(environment.typeaheadDebounceTime)
      .distinctUntilChanged()
      .switchMap(term => term.length < environment.typeaheadActivationChars ? [] : this.employeeService.getAllEmployees(term)
        .map(employees => this.employeeFilter(employees)));

  // Formats the selected employee in the input
  formatter = (x: { firstName: string, lastName: string }) =>
    x.firstName + ' ' + x.lastName;

  // If the employee is already on the list of mentees or is the mentor himself, remove it from the typeahead results.
  private employeeFilter = (employees) =>
    employees.filter(e => this.mentees
      .map(mentee => mentee.id).indexOf(e.id) < 0 && this.mentor.id !== e.id);

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService.getMentees(this.mentor.id)
      .subscribe(mentees => this.mentees = mentees);
  }

  addMentee(mentee: Employee, form: NgForm) {
    if (this.mentees.length < environment.maxMenteeReferences
      && _.has(mentee, 'id')) {
      console.log('menteeAdd', mentee);
      this.mentees.push(mentee);
    }

    form.resetForm();
  }
}
