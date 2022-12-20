import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomsnackComponent } from '../../customsnack/customsnack.component';

@Component({
  selector: 'app-editdetail',
  templateUrl: './editdetail.component.html',
  styleUrls: ['./editdetail.component.scss']
})
export class EditdetailComponent implements OnInit {
  Form: any;
  constructor(
    public dialogRef: MatDialogRef<EditdetailComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private snack: MatSnackBar,
  ) {
    {
      this.Form = new FormGroup({
        id: new FormControl(this.data.id, Validators.required),
        num: new FormControl(this.data.num, Validators.required),
        adress: new FormControl(this.data.adress, Validators.required),
        alt: new FormControl(this.data.alt, Validators.required),
        image1: new FormControl(this.data.image1, Validators.required),
        image2: new FormControl(this.data.image2, Validators.required),
        image3: new FormControl(this.data.image3, Validators.required),
        internet: new FormControl(this.data.internet, Validators.required),
        market: new FormControl(this.data.market, Validators.required),
        shower: new FormControl(this.data.shower, Validators.required),
        toilet: new FormControl(this.data.toilet, Validators.required)
      })
    }
  };

  ngOnInit(): void { };

  openSnackBar() {
    this.snack.openFromComponent(CustomsnackComponent, {
    });
  };


  saveDialog() {
    let id = this.Form.get('id')?.value;
    let num = this.Form.get('num')?.value;
    let adress = this.Form.get('adress')?.value;
    let alt = this.Form.get('alt')?.value;
    let image1 = this.Form.get('image1')?.value;
    let image2 = this.Form.get('image2')?.value;
    let image3 = this.Form.get('image3')?.value;
    let internet = this.Form.get('internet')?.value;
    let market = this.Form.get('market')?.value;
    let shower = this.Form.get('shower')?.value;
    let toilet = this.Form.get('toilet')?.value;
    this.http.put<any>(`http://camperfinder.org/node3/node4/${id}`, {
      id: id,
      num: num,
      adress: adress,
      alt: alt,
      image1: image1,
      image2: image2,
      image3: image3,
      internet: internet,
      market: market,
      shower: shower,
      toilet: toilet
    }).subscribe(data => {
      if (data) {
        this.dialogRef.close({ event: 'success' });
        this.snack.open('Başarıyla Eklendi', 'Ok', {
        });
      } else {
        this.snack.open('Eklenemedi Hata Var', 'Ok', {
        });
      }
    })
  };

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  };


}
