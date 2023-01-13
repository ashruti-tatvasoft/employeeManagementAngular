import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { employeeDataModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employeeList(): Observable<employeeDataModel> {
    const response: employeeDataModel = {
      status: 200,
      message: 'Employee Listed',
      data: [
        {
          id: 1,
          name: 'Ashruti',
          mobile: 9858749658,
          joiningDate:new Date('2021/01/10'),
          departmentId: 1,
          offeredSalary: 52000,
          isActive: true
        },
        {
          id: 2,
          name: 'Nirali',
          mobile: 9856549658,
          joiningDate:new Date('2021/05/10'),
          departmentId: 2,
          offeredSalary: 50000,
          isActive: false
        },
        {
          id: 3,
          name: 'Kingshuk',
          mobile: 9858749657,
          joiningDate:new Date('2019/01/10'),
          departmentId: 1,
          offeredSalary: 100000,
          isActive: true
        },
        {
          id: 4,
          name: 'Dhaval',
          mobile: 9856949658,
          joiningDate:new Date('2020/02/10'),
          departmentId: 2,
          offeredSalary: 69000,
          isActive: false
        },
        {
          id: 5,
          name: 'Naresh',
          mobile: 9865749658,
          joiningDate:new Date('2018/01/10'),
          departmentId: 3,
          offeredSalary: 200000,
          isActive: true
        },
        {
          id: 6,
          name: 'Hardik',
          mobile: 9848749658,
          joiningDate:new Date('2018/08/10'),
          departmentId: 1,
          offeredSalary: 300000,
          isActive: true
        }
      ]
    }
   return of(response);
  }
}
