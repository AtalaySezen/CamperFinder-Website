import { Component, OnInit } from '@angular/core';
import { PlacesapiService } from 'src/app/services/placesapi.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  placesData: Array<any> = [];
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

 

  constructor(private http: HttpClient, private placesapi: PlacesapiService) { }

  ngOnInit(): void {
    this.places();
  }

  places() {
    this.placesapi.GetPlaces().subscribe(data => {
      this.placesData = data;
      console.log(data);
    })
  }

  deletePlace(id:any){
    
  }




}
