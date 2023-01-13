import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from '../shared/shared.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeeRoutingModule
  ],
  exports:[SharedModule]
})
export class EmployeeModule { }
