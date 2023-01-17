import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, map, Observable, of } from 'rxjs';
import {departmentModel } from '../models/department.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  isLoadingSubject: BehaviorSubject<boolean>;
  constructor(private http: HttpClient) {}
  deparmentList(){
    const url = `${environment.jsonLoad}/department-list.json`;
    return this.http.get<any>(url);
  }
}
