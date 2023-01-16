import { Injectable } from '@angular/core';
import { Observable, of, pluck } from 'rxjs';
import {departmentModel } from '../../models/department.model';
import * as departmentData from '../../../../assets/department-list.json';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }
  deparmentList(): Observable<departmentModel[]> {
    const data:departmentModel [] = departmentData
    return of(data).pipe(pluck("default"))as Observable<departmentModel[]>;
  }
}
