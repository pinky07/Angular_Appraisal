import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../../environments/environment';
import { Employee } from '../../../../model/employee/employee';
import { EmployeeRelationship } from '../../../../model/employee/employee-relationship';
import { Relationship } from '../../../../model/employee/relationship';
import { EmployeeRelationshipService } from '../../../../service/employee-relationship.service';
import { EmployeeService } from '../../../../service/employee.service';
import { RelationshipService } from '../../../../service/relationship.service';

@Component({
  selector: 'app-add-mentee-reference',
  templateUrl: './add-mentee-reference.component.html',
  styleUrls: ['./add-mentee-reference.component.scss']
})
export class AddReferencesComponent implements OnInit {

  public model: Employee;

  @Input()
  public menteeRelationships: EmployeeRelationship[];

  public relationshipTypes: Relationship[];

  selectedRelationship: Relationship;

  employeeFilter = (employees) =>
    employees.filter(e => this.menteeRelationships.map(mr => mr.referred)
      .map(mre => mre.id).indexOf(e.id) < 0 );

  searchTerm = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => term.length < 4 ? [] : this.employeeService.getAllEmployees(term)
        .map(employees => this.employeeFilter(employees)));

  formatter = (x: { firstName: string, lastName: string }) =>
    x.firstName + ' ' + x.lastName;

  constructor(
    private employeeService: EmployeeService,
    private employeeRelationshipService: EmployeeRelationshipService,
    private relationshipService: RelationshipService
  ) { }

  ngOnInit() {
    this.relationshipService.getRelationships().subscribe(res => this.relationshipTypes = res);
  }

  addReference(model: Employee): void {
    if (this.selectedRelationship &&
      this.menteeRelationships.length < environment.maxMenteeReferences &&
      _.has(model, 'id')) {
      console.log('Added model: ', model);
      this.menteeRelationships.push(new EmployeeRelationship(
        0,
        model,
        this.selectedRelationship,
        ''
      ));
    }
  }
}
