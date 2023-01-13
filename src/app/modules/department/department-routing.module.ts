import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DepartmentComponent, pathMatch: 'full', title: 'Department' },
      { path: 'add-department', component: AddDepartmentComponent, title: 'AddDepartment'},
      { path: 'edit-department', component: AddDepartmentComponent, title: 'EditDepartment'}
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }