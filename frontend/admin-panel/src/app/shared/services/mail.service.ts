import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  getMails() {
    return this.http.get<any>(environment.mailApi)
  }

  deleteMail(id: number) {
    return this.http.delete<Response>(environment.mailApi + `/${id}`, { observe: 'response' });
  }


  putNote(id: any, data: any): Observable<any> {
    return this.http.put<Response>(environment.mailApi + `/${id}`, data, { observe: 'response' });
  }

  postNote(data: any): Observable<any> {
    return this.http.post<Response>(environment.mailApi + data, { observe: 'response' });
  }







}
