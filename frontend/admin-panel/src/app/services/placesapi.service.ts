import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesapiService {

  constructor(private http:HttpClient) { }

  getPlaces(){
    this.http.get('https://camperfinder.org/node/node2').subscribe(x=>{

    console.log(x);
    })
  }


}
