import { Component } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CampplacesdialogComponent } from './campplacesdialog/campplacesdialog.component';

@Component({
  selector: 'app-camp-places',
  templateUrl: './camp-places.component.html',
  styleUrls: ['./camp-places.component.scss']
})
export class CampPlacesComponent {
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
    this.cityArray = [];
    this.uniqueArray = [];
    this.placesService.getPlaces().subscribe(data => {
      this.placesArray = data;
      this.placesArray.map(x => {
        this.cityArray.push(x.city)
        this.uniqueArray = [...new Set(this.cityArray)]; //remove duplicate cities from data.
      })
      this.loadingSpinner = false;
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



  openDialog(city: any, campPlaceName: any, image: any, alt: any, info: any, coordinate1: any,
    coordinate2: any, district: string, image1: string, image2: string, image3: string,
    internet: string, toilet: string, market: string, shower: string) {
    const dialogRef = this.dialog.open(CampplacesdialogComponent, {
      width: '100%',
      height: 'auto',
      data: {
        city: city,
        info: info,
        image: image,
        alt: alt,
        campPlaceName: campPlaceName,
        coordinate1: coordinate1,
        coordinate2: coordinate2,
        district: district,
        image1: image1,
        image2: image2,
        image3: image3,
        internet: internet,
        toilet: toilet,
        market: market,
        shower: shower
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
    const dialogRef = this.dialog.open(CampplacesdialogComponent, {
      width: '100%',
      height: 'auto',
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
        this.snack.open("Error");
        this.loadingSpinner = false;
      }
    })
  }
}
