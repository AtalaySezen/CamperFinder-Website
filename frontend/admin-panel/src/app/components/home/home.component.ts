import { Component, Inject, OnInit } from '@angular/core';
import { PlacesapiService } from 'src/app/services/placesapi.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialoghomeComponent } from './dialoghome/dialoghome.component';
import { AddnewplaceComponent } from './addnewplace/addnewplace.component';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { CustomsnackComponent } from '../customsnack/customsnack.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  placesData: Array<any> = [];
  selectedData: Array<any> = [];
  uniqueArray: Array<any> = [];
  durationInSeconds = 5;
  cityArray: Array<any> = [];
  color: string = "primary";
  loadingTable: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<DialoghomeComponent>,
    private snack: MatSnackBar,
    private http: HttpClient,
    private placesapi: PlacesapiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.places();
  }

  changeCity(event: any) {
    this.loadingTable = true;
    this.placesData.map(x => {
      this.loadingTable = false;
      if (x.city == event.target.value) {
        localStorage.setItem("selectedItem", event.target.value);
        this.selectedData.push(x);
      }
      else if (event.target.value == "reset") {
        this.selectedData = [];
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
      this.placesData.map(x => {
        this.cityArray.push(x.city)
        this.uniqueArray = [...new Set(this.cityArray)]; //remove duplicate cities from data.
      })

    })
  }

  openSnackBar() {
    this.snack.openFromComponent(CustomsnackComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  deletePlace(id: any) {
    this.http.delete(`https://camperfinder.org/node/node2/${id}`).subscribe(() => {
      this.snack.open('Başarıyla Silindi', 'Ok', {
      });
      this.places();
    },
      (error) => {
        console.log(error);
        this.snack.open('Silinemedi Hata Var', 'Ok', {
        });
      }
    )
  }



  editPlace(id: number, num: number, info: string, image: string, alt: string, campPlaceName: string) {
    console.log(id, info, image)
    const dialogRef = this.dialog.open(DialoghomeComponent, {
      width: '800px',
      height: 'auto',
      data: {
        title: 'Edit Place',
        id: id,
        num: num,
        info: info,
        image: image,
        alt: alt,
        campPlaceName: campPlaceName
      },
    });
    dialogRef.afterClosed().subscribe(data => {
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
