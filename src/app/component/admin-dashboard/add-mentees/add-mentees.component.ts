import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../model/employee/employee';
import {EmployeeService} from '../../../service/employee.service';

@Component({
  selector: 'app-add-mentees',
  templateUrl: './add-mentees.component.html',
  styleUrls: ['./add-mentees.component.scss']
})
export class AddMenteesComponent implements OnInit {

  @Input()
  public mentor: Employee;

  mentees: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService.getMentees(this.mentor.id)
      .subscribe(mentees => this.mentees = mentees);
  }

}
