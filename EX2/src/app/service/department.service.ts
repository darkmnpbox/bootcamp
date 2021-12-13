import { Injectable } from '@angular/core';

export interface Department {
  id: number;
  name: string;
}

export interface Search {
  search: string
}


if (!localStorage.getItem('Departments')) {
  const Departments: Department[] = [
    {
      id: 1,
      name: 'ME',
    },
    {
      id: 2,
      name: 'CSE',
    },
    {
      id: 3,
      name: 'CHE',
    },
    {
      id: 4,
      name: 'PHY'
    }
  ]
  localStorage.setItem('Departments', JSON.stringify(Departments))
}


function matches(dept: Department, term: string): boolean {
  if (dept.name.toLowerCase().includes(term.toLowerCase())) {
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
export class DepartmentService {
  departments: Department[] = JSON.parse(localStorage.getItem('Departments')!)
  constructor() {
  }

  add(dept: Department) {
    this.departments.push(dept)
    localStorage.setItem('Departments', JSON.stringify(this.departments))
  }

  delete(id: number) {
    this.departments = this.departments.filter((dept) => {
      if (dept.id !== id) {
        return true
      }
      return false
    })
    localStorage.setItem('Departments', JSON.stringify(this.departments))
  }

  search(s: Search): Department[] {
    return this.departments.filter(dept => matches(dept, s.search));
  }

  sort(column: keyof Department, direction: boolean): Department[] {
    return [...this.departments].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction ? res : -res;
    });
  }

  find(id: number): Department | undefined {
    return this.departments.find(dept => dept.id === id)
  }

  update(id: number, data: { name: string }) {
    this.departments = this.departments.map((dept) => {
      if (dept.id === id) {
        dept.name = data.name;
        return dept
      }
      return dept
    })
    localStorage.setItem('Departments', JSON.stringify(this.departments))
  }

}
