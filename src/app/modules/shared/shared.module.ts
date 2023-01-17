import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { AngularMaterialModule } from './angular-material.module';
import { RouterModule } from '@angular/router';
import { StatusPipe } from './pipe/status.pipe';
import { LayoutComponent } from './component/layout/layout.component';
import { ChangeColorDirective } from './directive/change-color.directive';
import { DialogComponent } from './component/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { AppGridComponent } from '../app-grid/component/app-grid.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent, LayoutComponent, StatusPipe, ChangeColorDirective, DialogComponent, AppGridComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AngularMaterialModule,
    FormsModule,
    RouterModule,
    AppGridComponent,
    HeaderComponent,
    LayoutComponent,
    ChangeColorDirective,
    DialogComponent,
    StatusPipe,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
