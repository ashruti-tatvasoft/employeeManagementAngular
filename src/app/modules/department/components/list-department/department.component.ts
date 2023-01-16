import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';
import { ConfirmDialogModel, DialogComponent } from '../../../shared/component/dialog/dialog.component';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  result:string = '';
  dataList = new MatTableDataSource();
  displayedColumns = [
    'id',
    'name',
    'status',
    'action',
  ];
  constructor(private dialog: MatDialog, private departmentService: DepartmentService, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.getDepartment();
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataList.paginator = this.paginator;
  }
  getDepartment(){
    this.departmentService
      .deparmentList()
      .pipe(first())
      .subscribe((departmentData) => {
          this.snackBar.open('Department Listed', '', {
            duration: 500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
          this.dataList.data = departmentData;
      })
  }
  
  openDialog(id: number) {
    const message = `Are you sure you want to delete this?`;

    const dialogData = new ConfirmDialogModel("Delete Action", message);

    const dialogRef = this.dialog.open(DialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if(this.result){
        this.snackBar.open('Department Data Deleted Successfully.', '', {
          duration: 500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    });
  }
}
