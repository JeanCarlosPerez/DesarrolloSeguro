import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://desarrolloseguro.onrender.com/blog';
  
  constructor(private http: HttpClient) { }

  CreateBlog(newBlog: any): Observable<any>{
    const BlogData = {
      title: newBlog.title,
      content: newBlog.content,
    }

    return this.http.post(this.apiUrl, BlogData)
  }

  getAllBlogs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBlogById(blogId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${blogId}`);
  }

  updateBlog(blogId: string, updatedBlog: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${blogId}`, updatedBlog);
  }

  deleteBlog(blogId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${blogId}`);
  }

}