import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { EmployeesService, Search, Employee } from '../service/employees.service';

interface State {
  page: number;
  pageSize: number;
}

let state: State = {
  page: 1,
  pageSize: 4
}


@Component({
  selector: 'app-emp-listing',
  templateUrl: './emp-listing.component.html',
  styleUrls: ['./emp-listing.component.css'],
})
export class EmpListingComponent implements OnInit {
  public ascending: boolean;
  public dispEmployees: Employee[];
  _state: State;


  constructor(private service: EmployeesService) {
    this.dispEmployees = this.service.employees;
    this.ascending = true;
    this._state = state
  }

  ngOnInit(): void {
  }

  get employees(): Employee[] {
    let display = [...this.dispEmployees].slice((this._state.page - 1) * this._state.pageSize, (this._state.page - 1) * this._state.pageSize + this._state.pageSize)
    return display
  }

  getSearch(s: Search) {
    this._state.page = 1;
    this.dispEmployees = this.service.search(s);
  }

  clear() {
    this._state.page = 1;
    this.dispEmployees = this.service.employees;
  }

  onSort(column: keyof Employee) {
    this.ascending = !this.ascending
    this.dispEmployees = this.service.sort(column, this.ascending)
  }

  changePageSize(size: string) {
    this._state.pageSize = Number(size)
  }

  changePage(nav: string) {
    if (nav === 'prev' && this._state.page > 1) {
      this._state.page--
    }
    if (nav === 'next' && this._state.page < Math.ceil(this.dispEmployees.length / this._state.pageSize)) {
      this._state.page++
    }
  }

  delete(id: number) {
    if (confirm("Are you want to delete ...")) {
      this.service.delete(id)
      this.dispEmployees = this.service.employees;
    }
  }
}
