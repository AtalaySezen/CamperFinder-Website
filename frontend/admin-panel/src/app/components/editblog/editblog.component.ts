import { Component, Inject, OnInit } from '@angular/core';
import { PlacesapiService } from 'src/app/services/placesapi.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { CustomsnackComponent } from '../customsnack/customsnack.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {
  blogData: Array<any> = [];
  blogsHtml: Array<any> = [];
  loadingTable: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<EditblogComponent>,
    private snack: MatSnackBar,
    private http: HttpClient,
    private placesapi: PlacesapiService,
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.getBlogs();
  }


  getBlogs() {
    this.loadingTable = true;
    this.placesapi.GetBlogs().subscribe(data => {
      this.blogData = data;
      this.blogData.map(x => {
        console.log(x, "x")
        this.blogsHtml.push(x);
        this.loadingTable = false;
      })
    })
  };

  editBlog() {

  };

  deleteBlog(id: number) {

  };



}
