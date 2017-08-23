import {Component, Input, OnInit} from '@angular/core';
import {EmployeeRelationshipService} from '../../service/employee-relationship.service';
import {Employee} from '../../model/employee/employee';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {EmployeeService} from '../../service/employee.service';
import {EmployeeRelationship} from '../../model/employee/employee-relationship';
import {RelationshipService} from '../../service/relationship.service';
import {Relationship} from '../../model/employee/relationship';

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
  public references: Employee[];

  /* searchMentee = (text$: Observable<Employee>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.firstName.length < 4 ? [] : this.mentees
        .filter(m => m.firstName.toLowerCase().indexOf(term.firstName.toLowerCase()) > -1).slice(0, 10)); */

  constructor(
    private employeeService: EmployeeService,
    private employeeRelationshipService: EmployeeRelationshipService,
    private relationshipService: RelationshipService
  ) { }

  ngOnInit() {
    this.relationshipService.getRelationships().subscribe(res => this.relationshipTypes = res);
  }

  addReference(): void {
    if (this.selectedRelationship) {
      const employee = new Employee(0,
        'test@test.com',
        'Test',
        'reference',
        'AAAA',
        false,
        false,
        this.selectedRelationship.id === 5, // PEER Relationship
        null,
        null);

      this.menteeRelationships.push(new EmployeeRelationship(
          0,
          employee,
          this.selectedRelationship,
          ''
        ));
    }
  }

}
