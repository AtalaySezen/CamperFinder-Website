import { Component, OnInit } from '@angular/core';
import { PlacesapiService } from 'src/app/services/placesapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,private placesapi:PlacesapiService) { }

  ngOnInit(): void {
    this.places();
  }

  places(){
    this.placesapi.getPlaces(); 
        
    
  }




}
