import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs';
import {
  ConfirmDialogModel,
  DialogComponent,
} from '../../../shared/component/dialog/dialog.component';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent {
  result: string = '';
  gridOptions = {
    row: {},
    displayedColumns: ['id', 'name', 'isActive', 'action'],
    editRouterLink:'/department/edit-department',
    buttonConfig:['edit','delete'],
  };
  constructor(
    private departmentService: DepartmentService,
  ) {
  }
  ngOnInit(): void {
    this.getDepartment();
  }
  async getDepartment() {
    const departmentData =  this.departmentService
      .deparmentList();
    this.gridOptions.row = departmentData
  }
}
