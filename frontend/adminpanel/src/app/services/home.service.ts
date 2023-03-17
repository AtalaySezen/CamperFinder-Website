import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getPlaces() {
    return this.http.get<any>(environment.placesApi)
  }


  deletePlace(id: number) {
    return this.http.delete<Response>(environment.placesApi + `/${id}`, { observe: 'response' });
  }


  putPlace(id: any, data: any): Observable<any> {
    return this.http.put<Response>(environment.placesApi + `/${id}`, data, { observe: 'response' });
  }

  postPlace(data: any): Observable<any> {
    return this.http.post<Response>(environment.placesApi, data, { observe: 'response' });
  }



}
