import { Component, Inject, OnInit } from '@angular/core';
import { PlacesapiService } from 'src/app/services/placesapi.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { CustomsnackComponent } from '../customsnack/customsnack.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditblogdialogComponent } from './editblogdialog/editblogdialog.component';
import { NewblogdialogComponent } from './newblogdialog/newblogdialog.component';
@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {
  blogData: Array<any> = [];
  blogsHtml: Array<any> = [];
  loadingTable: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<EditblogdialogComponent>,
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
      this.blogsHtml = [];
      this.blogData = data;
      this.blogData.map(x => {
        console.log(x, "x")
        this.blogsHtml.push(x);
        this.loadingTable = false;
      })
    })
  };

  deleteBlog(id: any) {
    this.http.delete(`https://camperfinder.org/node2/node3/${id}`).subscribe(() => {
      this.snack.open('Başarıyla Silindi', 'Ok', {
      });
      this.getBlogs();
    },
      (error) => {
        console.log(error);
        this.snack.open('Silinemedi Hata Var', 'Ok', {
        });
      }
    )
  };

  editBlog(id: number, num: number, blogHeader: string, image: string, html: string, alt: string) {
    console.log(id, blogHeader, image, html);
    const dialogRef = this.dialog.open(EditblogdialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        title: 'Edit Blog',
        id: id,
        num: num,
        blogHeader: blogHeader,
        image: image,
        html: html,
        alt: alt
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getBlogs();
    })
  };

  addNewBlog(id: number, num: number, blogHeader: string, image: string, html: string, alt: string) {
    const dialogRef = this.dialog.open(NewblogdialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        id: id,
        title: 'Add New Blog',
        num: num,
        blogHeader: blogHeader,
        image: image,
        html: html,
        alt: alt
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getBlogs();
    })
  };





}




