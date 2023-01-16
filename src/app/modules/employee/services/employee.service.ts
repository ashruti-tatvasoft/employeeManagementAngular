import { Injectable } from '@angular/core';
import { Observable, of, pluck } from 'rxjs';
import { employeeModel } from '../models/employee.model';
import * as employeeData from '../../../../assets/employee-list.json'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employeeList(): Observable<employeeModel[]> {
    const data:employeeModel[] = employeeData
    return of(data).pipe(pluck("default"))as Observable<employeeModel[]>;
  }
}
