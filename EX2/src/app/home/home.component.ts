import { EmployeesService } from './../service/employees.service';
import { DepartmentService } from './../service/department.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  deptLength: number = 0;
  emplLength: number = 0;
  constructor(private deptService: DepartmentService, private emplService: EmployeesService) {
    this.deptLength = deptService.departments.length;
    this.emplLength = emplService.employees.length;
  }
}
