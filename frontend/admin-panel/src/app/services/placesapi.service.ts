import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlacesapiService {

  constructor(private http: HttpClient) { }

  //Get datas
  GetPlaces(): Observable<any> {
    return this.http.get<any>(environment.placesUrl);
  };

  DeletePlace(id: number): Observable<any> {
    return this.http.delete<any>(environment.placesUrl + { id });
  };


  //Get datas
  GetPlaceDetail(): Observable<any> {
    return this.http.get<any>(environment.detailsUrl);
  };

  DeletePlaceDetail(id: number): Observable<any> {
    return this.http.delete<any>(environment.detailsUrl + { id });
  };


  GetBlogs(): Observable<any> {
    return this.http.get<any>(environment.blogsUrl);
  };


}
