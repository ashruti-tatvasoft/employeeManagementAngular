import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/list-employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EmployeeComponent, pathMatch: 'full', title: 'Employee' },
      { path: 'add-employee', component: AddEmployeeComponent, title: 'AddEmployee'},
      { path: 'edit-employee/:id', component: AddEmployeeComponent, title: 'EditEmployee'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
