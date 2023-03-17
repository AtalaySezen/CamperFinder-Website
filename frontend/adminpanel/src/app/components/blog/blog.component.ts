import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlogService } from 'src/app/services/blog.service';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  constructor(private blogService: BlogService, private dialog: MatDialog, private snack: MatSnackBar) {
    this.loadingSpinner = false;
    this.getBlogData();
  }


  blogsArray: any[] = [];
  loadingSpinner: boolean = true;


  getBlogData() {
    this.blogsArray = [];
    this.loadingSpinner = true;
    this.blogService.getBlogs().subscribe(data => {
      data.map((element: any) => {
        this.blogsArray.push(element);
      })
      this.loadingSpinner = false;
    })
  }


  openDialog(_id: any, blogText: any, blogHeader: any, blogExplain: any, image: any, alt: any) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        title: 'Edit Blog',
        id: _id,
        blogText: blogText,
        blogExplain: blogExplain,
        image: image,
        alt: alt,
        blogHeader: blogHeader
      },
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        this.blogsArray = [];
        this.getBlogData();
      } else if (result && result.event == 'close') {
        return
      }
    });
  }


  openNewDialog() {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        title: "New Blog"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        this.getBlogData();
      }
      else if (result && result.event == 'close') {
        return
      }
    });
  }



  deleteBlog(id: any) {
    if (!confirm('Are you sure?')) return;
    this.loadingSpinner = true;
    this.blogService.deleteBlog(id).subscribe(response => {
      if (response.status == 200) {
        this.getBlogData();
        this.snack.open("Successfully Deleted", 'Ok');
        this.loadingSpinner = false;
      } else {
        this.snack.open("Silinemedi, bir hata var.", 'Ok');
      }
    })
  }







}
