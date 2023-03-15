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

  placesArray: any[] = [];

  blogsArray: any[] = [];

  cityArray: any[] = [];
  uniqueArray: any[] = [];
  loadingSpinner: boolean = true;


  getBlogData() {
    this.blogService.getBlogs().subscribe(data => {
      data.map((element: any) => {
        this.blogsArray.push(element);
      })

    })
  }





  openDialog(_id: any, city: any, campPlaceName: any, image: any, alt: any, info: any) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        title: 'Edit Place',
        id: _id,
        city: city,
        info: info,
        image: image,
        alt: alt,
        campPlaceName: campPlaceName
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        this.loadingSpinner = true;
        this.placesArray = [];
        // this.getPlacesData();
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
        title: "New Place"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        this.loadingSpinner = true;
        this.placesArray = [];
        this.loadingSpinner = false;
      }
      else if (result && result.event == 'close') {
        console.log("kapat ulayn")
        return
      }
    });

  }





  deletePlace(id: any) {
    if (!confirm('Are you sure?')) return;
    this.loadingSpinner = true;
    this.blogService.deleteBlog(id).subscribe(response => {
      if (response.status == 200) {

        this.snack.open("Başarıyla Silindi");
        this.loadingSpinner = false;
      } else {
        this.snack.open("Silinemedi, bir hata var.");
      }
    })
  }















}
