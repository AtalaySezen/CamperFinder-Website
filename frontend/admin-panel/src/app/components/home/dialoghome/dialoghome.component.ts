import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialoghome',
  templateUrl: './dialoghome.component.html',
  styleUrls: ['./dialoghome.component.scss']
})
export class DialoghomeComponent {
  Form: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialoghomeComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snack: MatSnackBar) {
    {
      this.Form = new FormGroup({
        id: new FormControl(this.data.id, Validators.required),
        num: new FormControl(this.data.num, Validators.required),
        info: new FormControl(this.data.info, Validators.required),
        campPlaceName: new FormControl(this.data.campPlaceName, Validators.required),
        image: new FormControl(this.data.image, Validators.required),
        alt: new FormControl(this.data.alt, Validators.required)

      })
    }
  }

  saveDialog() {
    let id = this.Form.get('id')?.value;
    let num = this.Form.get('num')?.value;
    let info = this.Form.get('info')?.value;
    let image = this.Form.get('image')?.value;
    let alt = this.Form.get('alt')?.value;
    let campPlaceName = this.Form.get('campPlaceName')?.value;
    this.http.put<any>(`https://camperfinder.org/node/node2/${id}`, {
      num: num,
      info: info,
      image: image,
      alt: alt,
      campPlaceName: campPlaceName
    }).subscribe(data => {
      if (data) {
        this.dialogRef.close({ event: 'success' });
        this.snack.open('Başarıyla Kaydedildi', 'Ok', {
        });
      } else {
        console.log("hata")
        this.snack.open('Başarıyla Silindi', 'Ok', {
        });
      }
    })

  }

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }




}

