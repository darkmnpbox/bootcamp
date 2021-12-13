import { DepartmentService, Search, Department } from './../service/department.service';
import { Component, OnInit } from '@angular/core';

interface State {
  page: number;
  pageSize: number;
}

let state: State = {
  page: 1,
  pageSize: 4
}


@Component({
  selector: 'app-dep-listing',
  templateUrl: './dep-listing.component.html',
  styleUrls: ['./dep-listing.component.css']
})
export class DepListingComponent implements OnInit {

  public ascending: boolean;
  public dispDepartments: Department[];
  _state: State;


  constructor(private service: DepartmentService) {
    this.dispDepartments = this.service.departments;
    this.ascending = true;
    this._state = state
  }

  ngOnInit(): void {
  }

  get departments(): Department[] {
    let display = [...this.dispDepartments].slice((this._state.page - 1) * this._state.pageSize, (this._state.page - 1) * this._state.pageSize + this._state.pageSize)
    return display
  }

  getSearch(s: Search) {
    this._state.page = 1;
    this.dispDepartments = this.service.search(s);
  }

  clear() {
    this._state.page = 1;
    this.dispDepartments = this.service.departments;
  }

  onSort(column: keyof Department) {
    this.ascending = !this.ascending
    this.dispDepartments = this.service.sort(column, this.ascending)
  }

  changePageSize(size: string) {
    this._state.pageSize = Number(size)
  }

  changePage(nav: string) {
    if (nav === 'prev' && this._state.page > 1) {
      this._state.page--
    }
    if (nav === 'next' && this._state.page < Math.ceil(this.dispDepartments.length / this._state.pageSize)) {
      this._state.page++
    }
  }

  delete(id: number) {
    if (confirm("Are you want to delete ...")) {
      this.service.delete(id)
      this.dispDepartments = this.service.departments;
    }
  }

}

