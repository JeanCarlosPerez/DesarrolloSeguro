import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  constructor(private http: HttpClient) { }

  createUser(newUser: any): Observable<any> {
    const userData = {
      name: newUser.name,
      lastName: newUser.lastName,
      userName: newUser.userName,
      email: newUser.email,
      password: newUser.password
    };

    return this.http.post('http://localhost:3000/auth/signup', userData);
  }

  loginUser(credentials: any): Observable<any> {
    const loginData = {
      userName: credentials.userName,
      password: credentials.password,
    };

    return this.http.post('http://localhost:3000/auth/signin', loginData);
  }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/user');
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/user/${userId}`);
  }

  updateUser(userId: string, updatedUser: any): Observable<any> {
    return this.http.put(`http://localhost:3000/user/${userId}`, updatedUser);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/user/${userId}`);
  }

}
