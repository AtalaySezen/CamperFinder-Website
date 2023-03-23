import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss']
})
export class BlogDialogComponent {

  Form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BlogDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snack: MatSnackBar,
    private blogService: BlogService) {
    if (this.data.title == 'New Blog') {
      this.Form = new FormGroup({
        blogHeader: new FormControl("", Validators.required),
        blogText: new FormControl("", Validators.required),
        blogExplain: new FormControl("", Validators.required),
        alt: new FormControl("", Validators.required),
        image: new FormControl("", Validators.required)
      })
    } else {
      this.Form = new FormGroup({
        id: new FormControl(this.data.id),
        blogHeader: new FormControl(this.data.blogHeader, Validators.required),
        blogText: new FormControl(this.data.blogText, Validators.required),
        blogExplain: new FormControl(this.data.blogExplain, Validators.required),
        image: new FormControl(this.data.image, Validators.required),
        alt: new FormControl(this.data.alt, Validators.required)
      })
    }
  }




  saveDialog() {
    let id = this.Form.get('id')?.value;

    let editData = {
      html: this.Form.get('blogText')?.value,
      image: this.Form.get('image')?.value,
      alt: this.Form.get('alt')?.value,
      blogExplain: this.Form.get('blogExplain')?.value,
      blogHeader: this.Form.get('blogHeader')?.value
    }

    let postData = {
      html: this.Form.get('blogText')?.value,
      image: this.Form.get('image')?.value,
      alt: this.Form.get('alt')?.value,
      blogExplain: this.Form.get('blogExplain')?.value,
      blogHeader: this.Form.get('blogHeader')?.value
    }

    if (this.data.title == 'Edit Blog') {
      this.blogService.putBlog(id, editData).subscribe(res => {
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
      this.blogService.postBlog(postData).subscribe(res => {
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