import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';
import { Employee } from '../../../model/backend/employee';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {

  selectedEmployee: Employee;

  @Output()
  onEmployeeSelected = new EventEmitter<Employee>();

  // Behavior for the typeahead: Triggers after 200ms, after 3 letters and waits for changes on the input.
  searchTerm = (text$: Observable<string>) =>
    text$
      .debounceTime(environment.typeaheadDebounceTime)
      .distinctUntilChanged()
      .switchMap(term => term.length < environment.typeaheadActivationChars ? [] : this.employeeService.getAllEmployees(term));

  // Formats the selected employee in the input
  formatter = (x: { firstName: string, lastName: string }) =>
    x.firstName + ' ' + x.lastName;

  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
  }

  selectEmployee($event, input) {
    $event.preventDefault();
    this.selectedEmployee = $event.item;
    this.onEmployeeSelected.emit(this.selectedEmployee);
    input.value = '';
  }

}
