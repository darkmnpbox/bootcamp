import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  age: number;
}

export interface Search {
  search: string
}


if (!localStorage.getItem('Employees')) {
  const Employees: Employee[] = [
    {
      id: 1,
      name: 'niyas',
      age: 22
    },
    {
      id: 2,
      name: 'sanu',
      age: 20
    },
    {
      id: 3,
      name: 'sinu',
      age: 21
    },
    {
      id: 4,
      name: 'adham',
      age: 18
    }
  ]
  localStorage.setItem('Employees', JSON.stringify(Employees))
}


function matches(employee: Employee, term: string): boolean {
  if (employee.age.toString().includes(term) ||
    employee.name.toLowerCase().includes(term.toLowerCase())) {
    return true
  }
  else {
    return false
  }
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees: Employee[] = JSON.parse(localStorage.getItem('Employees')!)
  // employees : Employee[] = JSON.parse(localStorage.getItem('Employees'))
  constructor() {
  }

  add(employee: Employee) {
    this.employees.push(employee)
    localStorage.setItem('Employees', JSON.stringify(this.employees))
  }

  delete(id: number) {
    this.employees = this.employees.filter((employee) => {
      if (employee.id !== id) {
        return true
      }
      return false
    })
    localStorage.setItem('Employees', JSON.stringify(this.employees))
  }

  search(s: Search): Employee[] {
    return this.employees.filter(employee => matches(employee, s.search));
  }

  sort(column: keyof Employee, direction: boolean): Employee[] {
    return [...this.employees].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction ? res : -res;
    });
  }

  find(id: number): Employee | undefined {
    return this.employees.find(employee => employee.id === id)
  }

  update(id: number, data: { name: string, age: number }) {
    this.employees = this.employees.map((employee) => {
      if (employee.id === id) {
        employee.name = data.name;
        employee.age = data.age;
        return employee
      }
      return employee
    })
    localStorage.setItem('Employees', JSON.stringify(this.employees))
  }

}
