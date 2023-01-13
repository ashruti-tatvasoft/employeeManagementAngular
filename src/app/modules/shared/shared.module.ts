import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../common/header/header.component';
import { AngularMaterialModule } from './angular-material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
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
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
