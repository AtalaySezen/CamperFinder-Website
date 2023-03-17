import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss']
})
export class HomeDialogComponent {
  Form: FormGroup;
  placesData: any[] = [];
  newplaceForm:boolean = false;

  constructor(public dialogRef: MatDialogRef<HomeDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snack: MatSnackBar,
    private placeService: HomeService) {
    if (this.data.title == 'New Place') {
      this.placeService.getPlaces().subscribe(data => {
        this.placesData = data;
        this.newplaceForm = true;
      })
      this.Form = new FormGroup({
        num: new FormControl("", Validators.required),
        city: new FormControl("", Validators.required),
        alt: new FormControl("", Validators.required),
        image: new FormControl("", Validators.required),
        campPlaceName: new FormControl("", Validators.required),
        info: new FormControl("", Validators.required),
      })
    } else {
      this.Form = new FormGroup({
        id: new FormControl(this.data.id, Validators.required),
        city: new FormControl(this.data.city, Validators.required),
        info: new FormControl(this.data.info, Validators.required),
        campPlaceName: new FormControl(this.data.campPlaceName, Validators.required),
        image: new FormControl(this.data.image, Validators.required),
        alt: new FormControl(this.data.alt, Validators.required)
      })
    }
  }


  saveDialog() {
    let id = this.Form.get('id')?.value;

    let myData = {
      info: this.Form.get('info')?.value,
      city: this.Form.get('city')?.value,
      image: this.Form.get('image')?.value,
      alt: this.Form.get('alt')?.value,
      campPlaceName: this.Form.get('campPlaceName')?.value
    }

    let postData = {
      num:this.Form.get('num')?.value,
      city: this.Form.get('city')?.value,
      alt: this.Form.get('alt')?.value,
      image: this.Form.get('image')?.value,
      campPlaceName: this.Form.get('campPlaceName')?.value,
      info: this.Form.get('info')?.value
    }

    if (this.data.title == 'Edit Place') {
      this.placeService.putPlace(id, myData).subscribe(res => {
        if (res.status == 200) {
          this.dialogRef.close({ event: 'success' });
          this.snack.open('Edited Successfully', 'Ok');
        } else {
          console.log(res)
          this.snack.open('Something went wrong', res.status);
        }
      }), (err: any) => {
        console.error(err);
        this.snack.open('Something went wrong!', 'Error');
      }
    } else if (this.data.title == 'New Place') {
      this.placeService.postPlace(postData).subscribe(res => {
        if (res.status == 200) {
          this.snack.open('Added Successfully', 'Ok');
          this.dialogRef.close({ event: 'success' });
        } else {
          console.log(res)
          this.snack.open('Something went wrong', res.status);
        }
      }), (err: any) => {
        console.error(err);
        this.snack.open('Something went wrong!', 'Error');
      }
    }
  }


  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }



}
