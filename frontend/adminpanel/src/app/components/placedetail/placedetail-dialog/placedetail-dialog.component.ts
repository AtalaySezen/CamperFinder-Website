import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlacedetailService } from 'src/app/services/placedetail.service';

@Component({
  selector: 'app-placedetail-dialog',
  templateUrl: './placedetail-dialog.component.html',
  styleUrls: ['./placedetail-dialog.component.scss']
})
export class PlacedetailDialogComponent {
  Form: FormGroup;
  newImage: any;
  image2Preview: any;


  constructor(public dialogRef: MatDialogRef<PlacedetailDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snack: MatSnackBar,
    private placeService: PlacedetailService) {
    if (this.data.title == 'New Place') {
      this.Form = new FormGroup({
        number: new FormControl(''),
        city: new FormControl('', Validators.required),
        image1: new FormControl('', Validators.required),
        image2: new FormControl('', Validators.required),
        image3: new FormControl('', Validators.required),
        internet: new FormControl('', Validators.required),
        market: new FormControl('', Validators.required),
        shower: new FormControl('', Validators.required),
        toilet: new FormControl('', Validators.required),
        alt: new FormControl('', Validators.required),
      })
    } else {
      this.Form = new FormGroup({
        number: new FormControl(this.data.number),
        city: new FormControl(this.data.city, Validators.required),
        image1: new FormControl(this.data.image1, Validators.required),
        image2: new FormControl(this.data.image2, Validators.required),
        image3: new FormControl(this.data.image3, Validators.required),
        internet: new FormControl(this.data.internet, Validators.required),
        market: new FormControl(this.data.market, Validators.required),
        shower: new FormControl(this.data.shower, Validators.required),
        toilet: new FormControl(this.data.toilet, Validators.required),
        alt: new FormControl(this.data.alt, Validators.required),
      })
    }
  }


  saveDialog() {
    let id = this.Form.get('id')?.value;

    let myData = {
      adress: this.Form.get('city')?.value,
      alt: this.Form.get('alt')?.value,
      image1: this.Form.get('image1')?.value,
      image2: this.Form.get('image2')?.value,
      image3: this.Form.get('image3')?.value,
      internet: this.Form.get('internet')?.value,
      market: this.Form.get('market')?.value,
      num: this.Form.get('number')?.value,
      shower: this.Form.get('shower')?.value,
      toilet: this.Form.get('toilet')?.value,
    }

    let postData = {

      adress: this.Form.get('city')?.value,
      alt: this.Form.get('alt')?.value,
      image1: this.Form.get('image1')?.value,
      image2: this.Form.get('image2')?.value,
      image3: this.Form.get('image3')?.value,
      internet: this.Form.get('internet')?.value,
      market: this.Form.get('market')?.value,
      num: this.Form.get('number')?.value,
      shower: this.Form.get('shower')?.value,
      toilet: this.Form.get('toilet')?.value,
    }

    if (this.data.title == 'Edit Place') {
      this.placeService.putPlaceDetail(id, myData).subscribe(res => {
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
      this.placeService.postPlaceDetail(postData).subscribe(res => {
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
