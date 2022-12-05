import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialoghome',
  templateUrl: './dialoghome.component.html',
  styleUrls: ['./dialoghome.component.scss']
})
export class DialoghomeComponent {
  Form: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialoghomeComponent>,private http:HttpClient,@Inject(MAT_DIALOG_DATA)
  public data:any) {
    {
      this.Form = new FormGroup({
        id: new FormControl(this.data.id, Validators.required),
        info: new FormControl(this.data.info, Validators.required),
        image: new FormControl(this.data.image,Validators.required)
      })
    }
  }

  saveDialog() {
    let id = this.Form.get('id')?.value;
    let info = this.Form.get('info')?.value;
    let image = this.Form.get('image')?.value;
    this.http.put<any>(`https://camperfinder.org/node/node2/${id}`, {
      info: info
    }).subscribe(data => {
      if (data) {
        this.dialogRef.close({ event: 'success' });
      } else {
        console.log("hata")
      }
    })
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }




}

  