import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';
import { Employee } from '../../../core/model/backend/employee';
import { EmployeeService } from '../../../core/service/employee.service';

@Component({
  selector: 'app-add-mentees',
  templateUrl: './add-mentees.component.html',
  styleUrls: ['./add-mentees.component.scss']
})
export class AddMenteesComponent implements OnInit, OnChanges {

  @Input()
  public mentor: Employee;

  mentee: Employee;
  public existingMentor: Employee;
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
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.employeeService.getMentees(this.mentor.id)
      .subscribe(mentees => this.mentees = mentees);
  }

  addMentee(addConfirmation: any, mentee: Employee, form: NgForm) {
    if (this.mentees.length < environment.maxMenteeReferences
      && _.has(mentee, 'id')) {

      // Consultar si tiene mentor
      this.employeeService.getMentor(this.mentee.id).toPromise()
        .then(mentor => {
          // Cambiar mentor
          // console.log('menteeAdd', mentee);
          // console.log('mentor', mentor);
          this.existingMentor = mentor;
          this.modalAddConfirmation(addConfirmation, mentee, form);
        })
        .catch(e => {
          if (e.status === 404) {
            // console.log('No mentor');
            this.employeeService.putMentor(mentee.id, this.mentor)
              .subscribe(() => this.mentees.push(mentee));
          } else {
            return null;
          }
        });
    }
  }

  deleteMentee(deleteConfirmation: any, mentee: Employee, form) {
    this.modalService.open(deleteConfirmation).result.then(
      () => this.modalDeleteCallback(true, form, mentee),
      () => this.modalDeleteCallback(false, form));
  }

  private modalAddConfirmation(addConfirmation: any, mentee: Employee, form: NgForm) {
    this.modalService.open(addConfirmation).result.then(
      () => this.modalAddCallback(true, form, mentee),
      () => this.modalAddCallback(false, form));
  }

  private modalAddCallback(fulfilled: boolean, form: NgForm, mentee?: Employee): void {
    if (fulfilled && mentee) {
      this.employeeService.putMentor(mentee.id, this.mentor)
        .subscribe(() => this.mentees.push(mentee));
    }
    form.resetForm();
  }

  private modalDeleteCallback(fulfilled: boolean, form: NgForm, mentee?: Employee): void {
    if (fulfilled && mentee) {
      this.employeeService.deleteMentor(mentee.id)
        .subscribe(() => this.mentees = this.mentees.filter(item => item !== mentee));
    }
    form.resetForm();
  }
}
