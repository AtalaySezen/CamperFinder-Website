import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlacedetailService } from 'src/app/shared/services/placedetail.service';

@Component({
  selector: 'app-campplacesdialog',
  templateUrl: './campplacesdialog.component.html',
  styleUrls: ['./campplacesdialog.component.scss']
})
export class CampplacesdialogComponent {
  Form: FormGroup;
  dataId: string;


  constructor(public dialogRef: MatDialogRef<CampplacesdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snack: MatSnackBar,
    private placeService: PlacedetailService) {
    this.dataId = data.id;

    if (this.data.title == 'New Place') {
      this.Form = new FormGroup({
        campPlaceName: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        coordinate1: new FormControl('', Validators.required),
        coordinate2: new FormControl('', Validators.required),
        district: new FormControl('', Validators.required),
        infotext: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
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
        campPlaceName: new FormControl(this.data.campPlaceName, Validators.required),
        city: new FormControl(this.data.city, Validators.required),
        coordinate1: new FormControl(this.data.coordinate1, Validators.required),
        coordinate2: new FormControl(this.data.coordinate2, Validators.required),
        district: new FormControl(this.data.district, Validators.required),
        infotext: new FormControl(this.data.info, Validators.required),
        image: new FormControl(this.data.image, Validators.required),
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
    let adress = this.Form.get('city')?.value;
    let alt = this.Form.get('alt')?.value;
    let image1 = this.Form.get('image1')?.value;
    let image2 = this.Form.get('image2')?.value;
    let image3 = this.Form.get('image3')?.value;
    let internet = this.Form.get('internet')?.value;
    let toilet = this.Form.get('toilet')?.value;
    let market = this.Form.get('market')?.value;
    let shower = this.Form.get('shower')?.value;
    let campPlaceName = this.Form.get('campPlaceName')?.value;
    let city = this.Form.get('city')?.value;
    let coordinate1 = this.Form.get('coordinate1')?.value;
    let coordinate2 = this.Form.get('coordinate2')?.value;
    let district = this.Form.get('district')?.value;
    let image = this.Form.get('image')?.value;
    let info = this.Form.get('infotext')?.value;

    //Place Detail Array:
    let campPlaceDetailData = {
      adress: adress,
      alt: alt,
      image1: image1,
      image2: image2,
      image3: image3,
      internet: internet,
      market: market,
      shower: shower,
      toilet: toilet,
    }

    let campPlaceData = {
      alt: alt,
      campPlaceName: campPlaceName,
      city: city,
      coordinate1: coordinate1,
      coordinate2: coordinate2,
      district: district,
      image: image,
      info: info,
      placeDetail: [campPlaceDetailData]
    }

    if (this.data.title == 'Edit Place') {
      this.placeService.putPlaceDetail(this.dataId, campPlaceData).subscribe(res => {
        if (res.status == 200) {
          this.dialogRef.close({ event: 'success' });
          this.snack.open('Edited Successfully', 'Ok');
        } else {
          this.snack.open('Something went wrong', res.status);
        }
      }), (err: any) => {
        console.error(err);
        this.snack.open('Something went wrong!', 'Error');
      }
    } else if (this.data.title == 'New Place') {
      this.placeService.postPlaceDetail(campPlaceData).subscribe(res => {
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
