import { Component, OnInit } from '@angular/core';
import { PlacesapiService } from 'src/app/services/placesapi.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { DialogHomeComponent } from '../dialog-home/dialog-home.component';

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
  constructor(private http: HttpClient, private placesapi: PlacesapiService, private dialog: MatDialog) { }

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







}
