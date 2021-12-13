import { Department, DepartmentService } from './../service/department.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dep-add-edit',
  templateUrl: './dep-add-edit.component.html',
  styleUrls: ['./dep-add-edit.component.css']
})
export class DepAddEditComponent implements OnInit {

  id: number;
  department: Department | undefined;
  name: string = '';

  constructor(private router: Router, private _route: ActivatedRoute, private service: DepartmentService) {
    this.id = Number(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.department = this.service.find(this.id);
      if (this.department) {
        this.name = this.department.name;
      }
    }
  }

  onSubmit(_id: number, data: { name: string }): void {
    if (_id === 0) {
      this.service.add({ id: Date.now(), name: data.name })
    }
    else {
      this.service.update(_id, data)
    }
    this.router.navigate(['/dep-listing'])
  }
}
