import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { departmentModel } from '../../models/department.model';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  departmentForm: FormGroup;
  departmentData: departmentModel[];
  id: string | null;
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private departmentService: DepartmentService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.validateForm();
      this.id = this.route.snapshot.queryParamMap.get('employeeId');
      this.id !== null ? this.getDepartmentData(this.id) : '';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.departmentForm.controls;
  }
  getDepartmentData(id: string){
    this.departmentService
    .deparmentList()
    .pipe(first())
    .subscribe((departmentValue) => {
      if (departmentValue.status === 200) {
        this.departmentData = departmentValue.data
      }
    });
    this.departmentData.map((department) => {
      if(department.id == parseInt(id)){
        this.departmentForm.patchValue(department);
      }
    })
  }
  validateForm() {
    this.departmentForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      isActive: [ 
        false,
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }
  onSubmit(id: string | null) {
    if (this.departmentForm.invalid) {
      this.snackBar.open('Check form Again.', '', {
        duration: 1000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      this.departmentForm.setErrors({
        ...this.departmentForm.errors,
        yourErrorName: true,
      });
      return;
    }
    if (id) {
      this.editProduct(id);
    } else {
      this.addProduct();
    }
  }
  addProduct() {
    const data: departmentModel = {
      id: 1,
      name: this.f['name'].value,
      isActive: this.f['isActive'].value
    };
    console.log('Add department data', data)
    this.snackBar.open('Add Department Successfully.', '', {
      duration: 500,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
    this.router.navigate(['department']);
  }
  editProduct(id: string) {
    const data: departmentModel = {
      id: parseInt(id),
      name: this.f['name'].value,
      isActive: this.f['isActive'].value
    };
    console.log('Edit Department Data', data)
    this.snackBar.open('Edit Department Successfully.', '', {
      duration: 500,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
    this.router.navigate(['department']);
  }
  cancel() {
    this.router.navigate(['department']);
  }
}
