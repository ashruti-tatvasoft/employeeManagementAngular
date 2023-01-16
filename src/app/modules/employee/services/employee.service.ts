import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, map, Observable, of } from 'rxjs';
import { employeeModel } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  isLoadingSubject: BehaviorSubject<boolean>;
  constructor(private http: HttpClient) {}
  employeeList(): Observable<employeeModel[]>{
    const url = `${environment.jsonLoad}/employee-list.json`;
    return this.http.get<any>(url).pipe(map((data) => {
      if (data) {
        return data;
      }
      return;
    }),
    catchError((err) => {
      return of(err.error);
    }),
    finalize(() => this.isLoadingSubject.next(false))
  );
  }
}
