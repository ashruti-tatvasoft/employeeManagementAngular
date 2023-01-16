import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './components/list-department/department.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DepartmentComponent, pathMatch: 'full', title: 'Department' },
      { path: 'add-department', component: AddDepartmentComponent, title: 'AddDepartment'},
      { path: 'edit-department/:id', component: AddDepartmentComponent, title: 'EditDepartment'}
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
