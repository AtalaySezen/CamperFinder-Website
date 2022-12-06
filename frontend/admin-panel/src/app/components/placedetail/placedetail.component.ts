import { Component, Inject, OnInit } from '@angular/core';
import { PlacesapiService } from 'src/app/services/placesapi.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditdetailComponent } from './editdetail/editdetail.component';
import { MatTableDataSource } from '@angular/material/table';
import { DialognewdetailComponent } from './dialognewdetail/dialognewdetail.component';
@Component({
  selector: 'app-placedetail',
  templateUrl: './placedetail.component.html',
  styleUrls: ['./placedetail.component.scss']
})
export class PlacedetailComponent implements OnInit {

  placesData: Array<any> = [];
  selectedData: Array<any> = [];
  color: string = "primary";
  loadingTable: boolean = false;
  displayedColumns: string[] = ['num', 'Adress', 'Alt Tag', 'Image 1', 'Image 2', 'Image 3', 'internet', 'market', 'shower', 'toilet', 'actions'];
  dataSource: MatTableDataSource<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<EditdetailComponent>, private http: HttpClient, private placesapi: PlacesapiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.places();

  }
  deletePlace(id: any) {
    console.log(id);
    this.http.delete(`http://camperfinder.org/node3/node4/${id}`).subscribe(() => {
      console.log("detay deleted");
      alert("Detay Sayfası Silindi")
    },
      (error) => {
        console.log(error);
        alert("Şehir Silinemedi Bir Hata Var.")
      }
    )
  }


  places() {
    this.loadingTable = true;
    this.placesapi.GetPlaceDetail().subscribe(data => {
      this.loadingTable = false;
      this.placesData = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    })
  }

  openDialog(adress: any, alt: any, image1: any, image2: any, image3: any, internet: any, market: any, num: any, shower: any, toilet: any) {
    const dialogRef = this.dialog.open(DialognewdetailComponent, {
      width: '600px',
      height: 'auto',
      data: {
        title: 'New Place',
        adress: adress,
        alt: alt,
        image1: image1,
        image2: image2,
        image3: image3,
        internet: internet,
        market: market,
        num: num,
        shower: shower,
        toilet: toilet
      },
    });
  }




}
