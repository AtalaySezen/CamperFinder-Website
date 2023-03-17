import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MailService } from 'src/app/services/mail.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PlacedetailDialogComponent } from './placedetail-dialog/placedetail-dialog.component';
import { PlacedetailService } from 'src/app/services/placedetail.service';

@Component({
  selector: 'app-placedetail',
  templateUrl: './placedetail.component.html',
  styleUrls: ['./placedetail.component.scss']
})
export class PlacedetailComponent {

  constructor(private detailService: PlacedetailService, private dialog: MatDialog, private snack: MatSnackBar) {
    this.getPlaceDetailData();
  }

  loadingSpinner: boolean = true;
  displayedColumns: string[] = ['number', 'adress', 'image1', 'image2', 'image3', 'internet', 'market', 'shower', 'toilet', 'actions'];

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
  placeDetailArray: any[] = [];



  getPlaceDetailData() {
    this.loadingSpinner = true;
    this.detailService.getPlaceDetail().subscribe(data => {
      console.log(data);
      this.placeDetailArray = data;
      this.dataSource = new MatTableDataSource(this.placeDetailArray);
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

  openDialog(num: any, city: any, image1: any, image2: any, image3: any, internet: any, market: any, shower: any, toilet: any, alt: any) {
    const dialogRef = this.dialog.open(PlacedetailDialogComponent, {
      width: '800px',
      height: '700px',
      data: {
        title: 'Edit Place',
        number: num,
        city: city,
        image1: image1,
        image2: image2,
        image3: image3,
        internet: internet,
        market: market,
        shower: shower,
        toilet: toilet,
        alt: alt
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        this.loadingSpinner = true;
        this.getPlaceDetailData();
      } else if (result && result.event == 'close') {
        return
      }
    });
  }


  openNewDialog() {
    const dialogRef = this.dialog.open(PlacedetailDialogComponent, {
      width: '800px',
      height: '700px',
      data: {
        title: "New Place"
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        this.loadingSpinner = true;
        this.placeDetailArray = [];
        this.getPlaceDetailData();
      }
      else if (result && result.event == 'close') {
        return
      }
    });
  }





  deleteMail(id: any) {
    if (!confirm('Are you sure?')) return;
    this.loadingSpinner = true;
    this.detailService.deleteDetailPlace(id).subscribe(response => {
      if (response.status == 200) {
        this.getPlaceDetailData();
        this.snack.open("Successfully Deleted", 'Ok');
        this.loadingSpinner = false;
      } else {
        this.snack.open("Silinemedi, bir hata var.", 'Ok');
      }
    })
  }



}
