import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MailService } from 'src/app/services/mail.service';
import { MailDialogComponent } from './mail-dialog/mail-dialog.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})

export class MailComponent {

  constructor(private mailService: MailService, private dialog: MatDialog, private snack: MatSnackBar) {
    this.getMailData();
  }

  loadingSpinner: boolean = true;
  displayedColumns: string[] = ['name', 'email', 'type', 'subject', 'message','actions'];

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  pageEvent: PageEvent;
  length = 10;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  mailList: any[] = [];



  getMailData() {
    this.loadingSpinner = true;
    this.mailService.getMails().subscribe(data => {
      console.log(data);
      this.mailList = data;
      this.dataSource = new MatTableDataSource(this.mailList);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
    this.loadingSpinner = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  openDialog(_id: any, note:any) {
    const dialogRef = this.dialog.open(MailDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        title: 'Edit Note',
        id: _id,
        note: note,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        this.getMailData();
      } else if (result && result.event == 'close') {
        return
      }
    });
  }


  openNewDialog() {
    const dialogRef = this.dialog.open(MailDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        title: "New Note"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        this.getMailData();
      }
      else if (result && result.event == 'close') {
        return
      }
    });
  }



  deleteMail(id: any) {
    if (!confirm('Are you sure?')) return;
    this.loadingSpinner = true;
    this.mailService.deleteMail(id).subscribe(response => {
      if (response.status == 200) {
        this.getMailData();
        this.snack.open("Successfully Deleted", 'Ok');
        this.loadingSpinner = false;
      } else {
        this.snack.open("Silinemedi, bir hata var.", 'Ok');
      }
    })
  }




}
