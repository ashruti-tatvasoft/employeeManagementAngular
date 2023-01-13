import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { AngularMaterialModule } from './modules/shared/angular-material.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { DepartmentModule } from './modules/department/department.module';
import { DialogComponent } from './modules/common/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    EmployeeModule,
    DepartmentModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
