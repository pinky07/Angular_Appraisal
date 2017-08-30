import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';

import {environment} from '../../../../../environments/environment';
import {Employee} from '../../../../model/employee/employee';
import {EmployeeRelationship} from '../../../../model/employee/employee-relationship';
import {Relationship} from '../../../../model/employee/relationship';
import {EmployeeRelationshipService} from '../../../../service/employee-relationship.service';
import {EmployeeService} from '../../../../service/employee.service';
import {RelationshipService} from '../../../../service/relationship.service';

@Component({
  selector: 'app-add-mentee-reference',
  templateUrl: './add-mentee-reference.component.html',
  styleUrls: ['./add-mentee-reference.component.scss']
})
export class AddReferencesComponent implements OnInit {

  @Input()
  public mentee: Employee;

  @Input()
  public menteeRelationships: EmployeeRelationship[];

  public model: Employee;

  public relationshipTypes: Relationship[];

  public selectedRelationship: Relationship;

  // If the employee is already on the list of references, remove it from the typeahead results.
  employeeFilter = (employees) =>
    employees.filter(e => this.menteeRelationships.map(mr => mr.referred)
      .map(mre => mre.id).indexOf(e.id) < 0);

  // Behavior for the typeahead: Triggers after 200ms, after 4 letters and waits for changes on the input.
  searchTerm = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => term.length < 4 ? [] : this.employeeService.getAllEmployees(term)
        .map(employees => this.employeeFilter(employees)));

  // Formats the selected employee in the input
  formatter = (x: { firstName: string, lastName: string }) =>
    x.firstName + ' ' + x.lastName;

  constructor(
    private employeeService: EmployeeService,
    private employeeRelationshipService: EmployeeRelationshipService,
    private relationshipService: RelationshipService
  ) { }

  public ngOnInit(): void {
    this.relationshipService.getRelationships().subscribe(res => this.relationshipTypes = res);
  }

  public addMenteeReference(referred: Employee): void {
    console.log('addMenteeReference', referred);
    if (this.selectedRelationship
      && this.menteeRelationships.length < environment.maxMenteeReferences
      && _.has(referred, 'id')) {

      const newEmployeeRelationship = new EmployeeRelationship(referred, this.selectedRelationship);
      console.log('newEmployeeRelationship', newEmployeeRelationship);
      this.employeeRelationshipService.postEmployeesByIdRelationships(this.mentee.id, newEmployeeRelationship)
        .subscribe(employeeRelationship => this.addMenteeReferenceCallback(employeeRelationship));
    }
  }

  private addMenteeReferenceCallback(employeeRelationship: EmployeeRelationship) {
    console.log('addMenteeReferenceCallback', employeeRelationship);
    this.menteeRelationships.push(employeeRelationship);
  }
}
