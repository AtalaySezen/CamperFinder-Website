import { Component, Inject, OnInit } from '@angular/core';
import { PlacesapiService } from 'src/app/services/placesapi.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialoghomeComponent } from './dialoghome/dialoghome.component';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  placesData: Array<any> = [];
  selectedData: Array<any> = [];
  color: string = "primary";
  loadingTable: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<DialoghomeComponent>, private http: HttpClient, private placesapi: PlacesapiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.places();
  }

  changeCity(event: any) {
    this.loadingTable = true;
    this.placesData.map(x => {
      this.loadingTable = false;
      if (x.city == event.target.value) {
        this.selectedData.push(x);
        console.log(this.selectedData)
      }
      else if (event.target.value == "selectall") {
        this.selectedData.push(x);
      }
    })

  }
  places() {
    this.loadingTable = true;
    this.placesapi.GetPlaces().subscribe(data => {
      this.loadingTable = false;
      this.placesData = data;
    })
  }
 
  deletePlace(id: any) {
    console.log(id);
    this.http.delete(`https://camperfinder.org/node/node2/${id}`).subscribe(() => {
      console.log("city deleted");
      alert("Şehir Silindi")
    },
      (error) => {
        console.log(error);
        alert("Şehir Silinemedi Bir Hata Var.")
      }
    )
  }



  //??
  openDialog(id: number, info: string, image: string) {
    console.log(id,info,image)
    const dialogRef = this.dialog.open(DialoghomeComponent, {
      width: '600px',
      height: 'auto',
      data: {
        title: 'Edit Mail',
        id: id,
        info: info,
        image: image
      },
    });




}









}
