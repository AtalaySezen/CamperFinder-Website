import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class PlacedetailService {


  constructor(private http: HttpClient) { }

  getPlaceDetail() {
    return this.http.get<any>(environment.detailsApi)
  }

  deleteDetailPlace(id: number) {
    return this.http.delete<Response>(environment.detailsApi + `/${id}`, { observe: 'response' });
  }


  putPlaceDetail(id: any, data: any): Observable<any> {
    return this.http.put<Response>(environment.detailsApi + `/${id}`, data, { observe: 'response' });
  }

  postPlaceDetail(data: any): Observable<any> {
    return this.http.post<Response>(environment.detailsApi, data, { observe: 'response' });
  }



}
