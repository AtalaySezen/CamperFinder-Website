import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editblogdialog',
  templateUrl: './editblogdialog.component.html',
  styleUrls: ['./editblogdialog.component.scss']
})
export class EditblogdialogComponent implements OnInit {
  Form: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditblogdialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snack: MatSnackBar) {
    {
      this.Form = new FormGroup({
        id: new FormControl(this.data.id, Validators.required),
        num: new FormControl(this.data.num, Validators.required),
        blogHeader: new FormControl(this.data.blogHeader, Validators.required),
        image: new FormControl(this.data.image, Validators.required),
        html: new FormControl(this.data.html, Validators.required),
        alt: new FormControl(this.data.alt, Validators.required)
      });
    }
  };

  ngOnInit(): void {
  }

  saveDialog() {
    let id = this.Form.get('id')?.value;
    let num = this.Form.get('num')?.value;
    let blogHeader = this.Form.get('blogHeader')?.value;
    let image = this.Form.get('image')?.value;
    let html = this.Form.get('html')?.value;
    let alt = this.Form.get('alt')?.value;
    this.http.put<any>(`https://camperfinder.org/node2/node3/${id}`, {
      num: num,
      blogHeader: blogHeader,
      image: image,
      html: html,
      alt: alt
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
  };

  
  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  };



}
