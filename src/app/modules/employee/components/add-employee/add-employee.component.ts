import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { employeeModel, employeeRequestModel } from '../../models/employee.model';
import { departmentModel } from '../../../department/models/department.model';
import { DepartmentService } from '../../../department/services/department.service';

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
      this.id = this.route.snapshot.paramMap.get('id');
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
      this.department = departmentValue
    });
  }
  async getEmployeeData(id: string){
    await this.employeeService
    .employeeList()
    .pipe(first())
    .subscribe((employeeValue) => {
        this.employeeData = employeeValue
        const employee = this.employeeData.find((employee) => employee.id == parseInt(id))
        if(employee) {
          employee.departmentId = employee.department.id;
          employee.joiningDate = new Date(employee.joiningDate)
          employee.deptname = employee.department.id;
          this.employeeForm.patchValue(employee);
        }
    });
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
        false,
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
    const data: employeeRequestModel = {
      id: 1,
      name: this.f['name'].value,
      mobile: this.f['mobile'].value,
      joiningDate: new Date(this.f['joiningDate'].value),
      departmentId: this.f['deptname'].value,
      offeredSalary: this.f['offeredSalary'].value,
      isActive: this.f['isActive'].value
    };
    console.log('Add employee Data', data)
    this.snackBar.open('Add Employee Successfully.', '', {
      duration: 500,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
    this.router.navigate(['employee']);
  }
  editProduct(id: string) {
    const data: employeeRequestModel = {
      id: parseInt(id),
      name: this.f['name'].value,
      mobile: this.f['mobile'].value,
      joiningDate: new Date(this.f['joiningDate'].value),
      departmentId: this.f['deptname'].value,
      offeredSalary: this.f['offeredSalary'].value,
      isActive: this.f['isActive'].value
    };
    console.log('Edit Employee Data', data)
    this.snackBar.open('Edit Employee Successfully.', '', {
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
