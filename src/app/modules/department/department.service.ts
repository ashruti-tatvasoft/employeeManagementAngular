import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { departmentDataModel } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }
  deparmentList(): Observable<departmentDataModel> {
    const response: departmentDataModel = {
      status: 200,
      message: 'Department Listed',
      data: [
        {
          id: 1,
          name: 'Development',
          isActive: true
        },
        {
          id: 2,
          name: 'Design',
          isActive: false
        },
        {
          id: 3,
          name: 'BDA',
          isActive: true
        },
        {
          id: 4,
          name: 'HR',
          isActive: false
        },
        {
          id: 5,
          name: 'Admin',
          isActive: true
        },
        {
          id: 6,
          name: 'Account',
          isActive: true
        }
      ]
    }
   return of(response);
  }
}
