import {Component, Input, OnInit} from '@angular/core';
import {EmployeeRelationshipService} from '../../service/employee-relationship.service';
import {Employee} from '../../model/employee/employee';
import {EmployeeService} from '../../service/employee.service';
import {EmployeeRelationship} from '../../model/employee/employee-relationship';
import {RelationshipService} from '../../service/relationship.service';
import {Relationship} from '../../model/employee/relationship';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-add-references',
  templateUrl: './add-references.component.html',
  styleUrls: ['./add-references.component.scss']
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
      this.menteeRelationships.length < environment.maxMenteeReferences) {
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
