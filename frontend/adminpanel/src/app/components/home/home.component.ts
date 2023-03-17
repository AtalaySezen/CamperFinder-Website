import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  placesArray: any[] = [];
  cityArray: any[] = [];
  uniqueArray: any[] = [];
  numbersArray: any[] = [];
  loadingSpinner: boolean = true;

  constructor(
    private placesService: HomeService,
    private dialog: MatDialog,
    private snack: MatSnackBar) {
    this.getPlacesData();
  }

  getPlacesData() {
    this.placesArray = [];
    this.uniqueArray = [];
    this.placesService.getPlaces().subscribe(data => {
      data.map((element: any) => {
        this.placesArray.push(element);
      })
      this.loadingSpinner = false;
      this.placesArray.map(x => {
        this.cityArray.push(x.city)
        this.uniqueArray = [...new Set(this.cityArray)]; //remove duplicate cities from data.
        // console.log(this.uniqueArray);
      })
    })
  }


  selectCity(selectedValue: any) {
    if (selectedValue != "") {
      this.loadingSpinner = true;
      this.placesArray = [];
      this.placesService.getPlaces().subscribe(data => {
        data.map((y: any) => {
          if (y.city == selectedValue) {
            this.placesArray.push(y);
            this.loadingSpinner = false;
          } else if (selectedValue == "reset") {
            this.getPlacesData();
            this.loadingSpinner = false;
          }
        })
      })
    }
  }



  openDialog(_id: any, city: any, campPlaceName: any, image: any, alt: any, info: any) {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        title: 'Edit Place',
        id: _id,
        city: city,
        info: info,
        image: image,
        alt: alt,
        campPlaceName: campPlaceName
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        this.loadingSpinner = true;
        this.placesArray = [];
        this.getPlacesData();
      } else if (result && result.event == 'close') {
        return
      }
    });
  }


  openNewDialog() {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '800px',
      height: '700px',
      data: {
        title: "New Place"
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        this.loadingSpinner = true;
        this.placesArray = [];
        this.getPlacesData();
      }
      else if (result && result.event == 'close') {
        return
      }
    });
  }



  deletePlace(id: any) {
    if (!confirm('Are you sure?')) return;
    this.loadingSpinner = true;
    this.placesService.deletePlace(id).subscribe(response => {
      if (response.status == 200) {
        this.getPlacesData();
        this.snack.open("Successfully Deleted", 'Ok');
        this.loadingSpinner = false;
      } else {
        this.snack.open("Silinemedi, bir hata var.");
      }
    })
  }





}
