import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailService } from 'src/app/services/mail.service';


@Component({
  selector: 'app-mail-dialog',
  templateUrl: './mail-dialog.component.html',
  styleUrls: ['./mail-dialog.component.scss']
})
export class MailDialogComponent {
  Form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MailDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snack: MatSnackBar,
    private mailService: MailService) {
    if (this.data.title == 'New Blog') {
      this.Form = new FormGroup({
        note: new FormControl("", Validators.required),
      })
    } else {
      this.Form = new FormGroup({
        id: new FormControl(this.data.id),
        note: new FormControl(this.data.alt, Validators.required)
      })
    }
  }




  saveDialog() {
    let id = this.Form.get('id')?.value;

    let editData = {
      note: this.Form.get('note')?.value,
    }

    let postData = {
      note: this.Form.get('note')?.value
    }

    if (this.data.title == 'Edit Blog') {
      this.mailService.putNote(id, editData).subscribe(res => {
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
    } else if (this.data.title == 'New Blog') {
      this.mailService.postNote(postData).subscribe(res => {
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
