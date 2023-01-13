import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { employeeModel } from '../../models/employee.model';
import { departmentModel } from '../../models/department.model';
import { DepartmentService } from '../../department/department.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;
  employeeData: employeeModel[];
  id: string | null;
  department: departmentModel[]
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.validateForm();
      this.id = this.route.snapshot.queryParamMap.get('employeeId');
      this.id !== null ? this.getEmployeeData(this.id) : '';
      this.getDepartment();
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.employeeForm.controls;
  }
  getDepartment(){
    return this.departmentService
    .deparmentList()
    .pipe(first())
    .subscribe((departmentValue) => {
      if (departmentValue.status === 200) {
        this.department = departmentValue.data
      }
    });
  }
  getEmployeeData(id: string){
    this.employeeService
    .employeeList()
    .pipe(first())
    .subscribe((employeeValue) => {
      if (employeeValue.status === 200) {
        this.employeeData = employeeValue.data
      }
    });
    this.employeeData.map((employee) => {
      if(employee.id == parseInt(id)){
        this.employeeForm.patchValue(employee);
      }
    })
  }
  validateForm() {
    this.employeeForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      joiningDate: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
      mobile: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
      offeredSalary: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
      deptname: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
      isActive: [ 
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }
  onSubmit(id: string | null) {
    if (this.employeeForm.invalid) {
      this.snackBar.open('Check form Again.', '', {
        duration: 1000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      this.employeeForm.setErrors({
        ...this.employeeForm.errors,
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
    const data: employeeModel = {
      id: 1,
      name: this.f['name'].value,
      mobile: this.f['mobile'].value,
      joiningDate: this.f['joiningDate'].value,
      departmentId: this.f['deptname'].value,
      offeredSalary: this.f['offeredSalary'].value,
      isActive: this.f['isActive'].value
    };
    this.snackBar.open('Add Product Successfully.', '', {
      duration: 500,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
    this.router.navigate(['employee']);
  }
  editProduct(id: string) {
    const data: employeeModel = {
      id: parseInt(id),
      name: this.f['name'].value,
      mobile: this.f['mobile'].value,
      joiningDate: this.f['joiningDate'].value,
      departmentId: this.f['deptname'].value,
      offeredSalary: this.f['offeredSalary'].value,
      isActive: this.f['isActive'].value
    };
    this.snackBar.open('Edit Product Successfully.', '', {
      duration: 500,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
    this.router.navigate(['employee']);
  }
  cancel() {
    this.router.navigate(['employee']);
  }
}
