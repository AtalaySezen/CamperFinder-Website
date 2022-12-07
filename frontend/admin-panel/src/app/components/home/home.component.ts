import { Component, Inject, OnInit } from '@angular/core';
import { PlacesapiService } from 'src/app/services/placesapi.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialoghomeComponent } from './dialoghome/dialoghome.component';
import { AddnewplaceComponent } from './addnewplace/addnewplace.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  placesData: Array<any> = [];
  selectedData: Array<any> = [];
  color: string = "primary";
  loadingTable: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<DialoghomeComponent>, private http: HttpClient, private placesapi: PlacesapiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.places();
  }

  changeCity(event: any) {
    console.log("çalıştı")
    this.loadingTable = true;
    this.placesData.map(x => {
      this.loadingTable = false;
      localStorage.setItem('selectedCity', event.target.value);
      if (x.city == event.target.value) {
        this.selectedData.push(x);
        console.log(this.selectedData)
      }
      else if (event.target.value == "selectall") {
        this.selectedData.push(x);
      }
    })
  }

  places() {
    this.loadingTable = true;
    this.placesapi.GetPlaces().subscribe(data => {
      this.loadingTable = false;
      this.placesData = data;
      console.log(data);
    })
  }

  deletePlace(id: any) {
    console.log(id);
    this.http.delete(`https://camperfinder.org/node/node2/${id}`).subscribe(() => {
      console.log("city deleted");
      alert("Şehir Silindi")
    },
      (error) => {
        console.log(error);
        alert("Şehir Silinemedi Bir Hata Var.")
      }
    )
  }



  //??
  openDialog(id: number,num:number, info: string, image: string, alt: string, campPlaceName: string) {
    console.log(id, info, image)
    const dialogRef = this.dialog.open(DialoghomeComponent, {
      width: '600px',
      height: 'auto',
      data: {
        title: 'Edit Place',
        id: id,
        num:num,
        info: info,
        image: image,
        alt: alt,
        campPlaceName: campPlaceName
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      this.places();
      console.log("dialog kapandı")
    })
  }

  addNewPlace(num: any, city: any, alt: any, district: any, image: any, campPlaceName: any, info: any, coordinate1: any, coordinate2: any) {
    const dialogRef = this.dialog.open(AddnewplaceComponent, {
      width: '600px',
      height: 'auto',
      data: {
        title: 'Add New Place',
        num: num,
        city: city,
        alt: alt,
        district: district,
        image: image,
        campPlaceName: campPlaceName,
        info: info,
        coordinate1: coordinate1,
        coordinate2: coordinate2
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      this.places();
    })
  }









}
