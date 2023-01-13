import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { SharedModule } from '../shared/shared.module';
import { AddDepartmentComponent } from './add-department/add-department.component';

@NgModule({
  declarations: [
    DepartmentComponent,
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
