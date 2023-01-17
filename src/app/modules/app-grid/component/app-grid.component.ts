import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';
import { ConfirmDialogModel, DialogComponent } from '../../shared/component/dialog/dialog.component';

@Component({
  selector: 'app-app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.css']
})
export class AppGridComponent implements AfterViewInit , OnInit {
  result: string = ''
  @Input() gridOptions: any;
  dataList = new MatTableDataSource();
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar,){}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.gridOptions.row.pipe(first())
    .subscribe((employeeData: any) => {
      this.dataList = employeeData
    });
  }
  ngAfterViewInit() {
    this.dataList.paginator = this.paginator;
  }
  openDialog(id: number) {
    console.log(id)
    const message = `Are you sure you want to delete this?`;

    const dialogData = new ConfirmDialogModel("Delete Action", message);

    const dialogRef = this.dialog.open(DialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if(this.result){
        this.snackBar.open('Employee Data Deleted Successfully.', '', {
          duration: 500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    });
  }
}
