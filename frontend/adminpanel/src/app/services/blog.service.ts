import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }


  
  getBlogs() {
    return this.http.get<any>(environment.blogsApi)
  }

  
  deleteBlog(id: number) {
    return this.http.delete<any>(environment.blogsApi + { id });
  }



}
