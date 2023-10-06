import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get<any>(environment.blogsApi)
  }

  deleteBlog(id: number) {
    return this.http.delete<Response>(environment.blogsApi + `/${id}`, { observe: 'response' });
  }


  putBlog(id: any, data: any): Observable<any> {
    return this.http.put<Response>(environment.blogsApi + `/${id}`, data, { observe: 'response' });
  }

  postBlog(data: any): Observable<any> {
    return this.http.post<Response>(environment.blogsApi, data, { observe: 'response' });
  }



}
