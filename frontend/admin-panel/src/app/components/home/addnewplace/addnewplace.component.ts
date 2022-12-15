import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomsnackComponent } from '../../customsnack/customsnack.component';
@Component({
  selector: 'app-addnewplace',
  templateUrl: './addnewplace.component.html',
  styleUrls: ['./addnewplace.component.scss']
})
export class AddnewplaceComponent implements OnInit {
  Form: FormGroup;
  durationInSeconds = 5;

  constructor(public dialogRef: MatDialogRef<AddnewplaceComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private snack: MatSnackBar,

  ) {
    {
      this.Form = new FormGroup({
        num: new FormControl(this.data.num, Validators.required),
        city: new FormControl(this.data.city, Validators.required),
        alt: new FormControl(this.data.alt, Validators.required),
        district: new FormControl(this.data.district, Validators.required),
        image: new FormControl(this.data.image, Validators.required),
        campPlaceName: new FormControl(this.data.campPlaceName, Validators.required),
        info: new FormControl(this.data.info, Validators.required),
        coordinate1: new FormControl(this.data.coordinate1, Validators.required),
        coordinate2: new FormControl(this.data.coordinate2, Validators.required)
      })
    }
  }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snack.openFromComponent(CustomsnackComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  saveDialog() {
    let num = this.Form.get('num')?.value;
    let city = this.Form.get('city')?.value;
    let alt = this.Form.get('alt')?.value;
    let district = this.Form.get('district')?.value;
    let image = this.Form.get('image')?.value;
    let campPlaceName = this.Form.get('campPlaceName')?.value;
    let info = this.Form.get('info')?.value;
    let coordinate1 = this.Form.get('coordinate1')?.value;
    let coordinate2 = this.Form.get('coordinate2')?.value;

    this.http.post<any>(`https://camperfinder.org/node/node2/`, {
      num: num,
      city: city,
      alt: alt,
      district: district,
      image: image,
      campPlaceName: campPlaceName,
      info: info,
      coordinate1: coordinate1,
      coordinate2: coordinate2
    }).subscribe(data => {
      if (data) {
        this.dialogRef.close({ event: 'success' });
        this.snack.open('Başarıyla Eklendi', 'Ok', {
        });
      } else {
        console.log("hata")
        this.snack.open('Eklenemedi Hata Var', 'Ok', {
        });
      }
    })
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }

}
