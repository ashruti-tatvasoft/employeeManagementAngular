import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  result:string = '';
  dataList = new MatTableDataSource();
  gridOptions = {
    displayedColumns: [
      'id',
      'name',
      'mobile',
      'joiningDate',
      'departmentId',
      'offeredSalary',
      'isActive',
      'action'
    ],
    buttonConfig:['view','edit','delete'],
    editRouterLink:'/employee/edit-employee',
    row:{}
//     
  };
  
  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.getEmployee();
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataList.paginator = this.paginator;
  }
  getEmployee(){
    const employee = this.employeeService
      .employeeList();
      this.gridOptions.row = employee
  }
}
