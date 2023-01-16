import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../common/header/header.component';
import { AngularMaterialModule } from './angular-material.module';
import { RouterModule } from '@angular/router';
import { StatusPipe } from '../common/custom/status.pipe';
import { LayoutComponent } from '../common/layout/layout.component';
import { ChangeColorDirective } from '../common/custom/change-color.directive';
import { DialogComponent } from '../common/dialog/dialog.component';



@NgModule({
  declarations: [HeaderComponent, LayoutComponent, StatusPipe, ChangeColorDirective, DialogComponent],
  imports: [
    AngularMaterialModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    AngularMaterialModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    LayoutComponent,
    ChangeColorDirective,
    DialogComponent,
    StatusPipe,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
