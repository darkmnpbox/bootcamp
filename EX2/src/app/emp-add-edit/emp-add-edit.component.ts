import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService, Employee } from '../service/employees.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  id: number;
  employee: Employee | undefined;
  name: string = '';
  age: number = 0;

  constructor(private router: Router, private _route: ActivatedRoute, private service: EmployeesService) {
    this.id = Number(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.employee = this.service.find(this.id);
      if (this.employee) {
        this.name = this.employee.name;
        this.age = this.employee.age;
      }
    }
  }

  onSubmit(_id: number, data: { name: string, age: number }): void {
    if (_id === 0) {
      this.service.add({ id: Date.now(), name: data.name, age: data.age })
    }
    else {
      this.service.update(_id, data)
    }
    this.router.navigate(['/emp-listing'])
  }

}
