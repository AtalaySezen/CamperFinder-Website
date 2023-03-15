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


  constructor(public dialogRef: MatDialogRef<HomeDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snack: MatSnackBar,
    private placeService: HomeService) {
    if (this.data.title == 'New Place') {
      this.Form = new FormGroup({
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

  // saveDialog() {
  //   let id = this.Form.get('id')?.value;
  //   let info = this.Form.get('info')?.value;
  //   let city = this.Form.get('city')?.value;
  //   let image = this.Form.get('image')?.value;
  //   let alt = this.Form.get('alt')?.value;
  //   let campPlaceName = this.Form.get('campPlaceName')?.value;

  //   this.http.put<any>(`https://camperfinder.org/node/node2/${id}`, {
  //     info: info,
  //     city: city,
  //     image: image,
  //     alt: alt,
  //     campPlaceName: campPlaceName
  //   }).subscribe(data => {
  //     if (data) {
  //       this.dialogRef.close({ event: 'success' });
  //       this.snack.open('Başarıyla Kaydedildi', 'Ok', {
  //       });
  //     } else {
  //       console.log("hata")
  //       this.snack.open('Başarıyla Silindi', 'Ok', {
  //       });
  //     }
  //   })
  // }



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
      city: this.Form.get('city')?.value,
      alt: this.Form.get('alt')?.value,
      image: this.Form.get('image')?.value,
      campPlaceName: this.Form.get('campPlaceName')?.value,
      info: this.Form.get('info')?.value
    }

    if (this.data.title == 'Edit Place') {
      console.log("edit place çalıştı")
      this.placeService.putPlace(id, myData).subscribe(res => {
        if (res.status == 200) {
          this.dialogRef.close({ event: 'success' });
        } else {
          console.log(res)
          this.snack.open('Bir Hata Oluştu', res.status);
        }
      }), (err: any) => {
        console.error(err);
        this.snack.open('Bir hata oluştu!', 'Error');
      }
    } else if (this.data.title == 'New Place') {
      console.log("new place çalıştı")
      this.placeService.postPlace(postData).subscribe(res => {
        if (res.status == 200) {
          this.snack.open('Başarıyla Eklendi');
          this.dialogRef.close({ event: 'success' });
        } else {
          console.log(res)
          this.snack.open('Bir Hata Oluştu', res.status);
        }
      }), (err: any) => {
        console.error(err);
        this.snack.open('Bir hata oluştu!', 'Error');
      }
    }
  }


  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }



}
