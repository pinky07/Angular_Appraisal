import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';

import {environment} from '../../../../environments/environment';
import {Employee} from '../../../core/model/backend/employee';
import {EmployeeRelationship} from '../../../core/model/backend/employee-relationship';
import {RelationshipType} from '../../../core/model/backend/relationship-type';
import {EmployeeRelationshipService} from '../../../core/service/employee-relationship.service';
import {EmployeeService} from '../../../core/service/employee.service';
import {RelationshipTypeService} from '../../../core/service/relationship-type.service';

@Component({
  selector: 'app-add-mentee-reference',
  templateUrl: './add-mentee-reference.component.html',
  styleUrls: ['./add-mentee-reference.component.scss']
})
export class AddMenteeReferencesComponent implements OnInit, OnChanges {

  @Input()
  public mentee: Employee;

  @Input()
  public menteeRelationships: EmployeeRelationship[];

  public model: Employee;
  public relationshipTypes: RelationshipType[];
  public selectedRelationship: RelationshipType;

  referenceLimitReached: boolean;

  // Behavior for the typeahead: Triggers after 200ms, after 3 letters and waits for changes on the input.
  public searchTerm = (text$: Observable<string>) =>
    text$
      .debounceTime(environment.typeaheadDebounceTime)
      .distinctUntilChanged()
      .switchMap(term => term.length < environment.typeaheadActivationChars ? [] : this.employeeService.getAllEmployees(term)
        .map(employees => this.employeeFilter(employees)));

  // Formats the selected employee in the input
  public formatter = (x: { firstName: string, lastName: string }) =>
    x.firstName + ' ' + x.lastName;

  // If the employee is already on the list of references, remove it from the typeahead results.
  private employeeFilter = (employees) =>
    employees.filter(e => this.menteeRelationships.map(mr => mr.referred)
      .map(mre => mre.id).indexOf(e.id) < 0);

  constructor(
    private employeeService: EmployeeService,
    private employeeRelationshipService: EmployeeRelationshipService,
    private relationshipTypeService: RelationshipTypeService
  ) { }

  ngOnChanges(): void {
    this.referenceLimitReached = this.menteeRelationships.length >= environment.maxMenteeReferences;
  }

  public ngOnInit(): void {
    this.relationshipTypeService.getRelationshipTypes().subscribe(res => this.relationshipTypes = res);
  }

  public addMenteeReference(referred: Employee, form: NgForm): void {
    // console.log('addMenteeReference', referred);
    if (this.selectedRelationship
      && !this.referenceLimitReached
      && _.has(referred, 'id')) {
      const newEmployeeRelationship = new EmployeeRelationship(referred, this.selectedRelationship);
      // console.log('newEmployeeRelationship', newEmployeeRelationship);
      this.employeeRelationshipService.postEmployeesByIdRelationships(this.mentee.id, newEmployeeRelationship)
        .subscribe(employeeRelationship => {
          this.addMenteeReferenceCallback(employeeRelationship);
          form.resetForm();
        });
    }
  }

  private addMenteeReferenceCallback(employeeRelationship: EmployeeRelationship) {
    // console.log('addMenteeReferenceCallback', employeeRelationship)
    this.menteeRelationships.push(employeeRelationship);
    this.referenceLimitReached = this.menteeRelationships.length >= environment.maxMenteeReferences;
  }
}
