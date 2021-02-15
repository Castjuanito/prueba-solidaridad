import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  registration(user: User): Observable<any> {
    const body: User = {
      username: user.username,
      email: user.email,
      password1: user.password1,
      password2: user.password2,
    }
    const url = environment.apiUrl + 'auth/registration/';
    const headers = this.GetHttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    return this.http.post(url, body, {
      headers,
      observe: 'response'
    });
  }

  login(user: User): Observable<any> {
    const body: any = {
      username: 'pruebajuanito',
      password: 'ABC123456juan'
    }
    const url = environment.apiUrl + 'auth/login/';
    const headers = this.GetHttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    return this.http.post(url, body, {
      headers,
      observe: 'response'
    });
  }

  getUser(): Observable<any> {
    const userId = localStorage.getItem('currentUserId');
    const url = environment.apiUrl + 'api/task/' + userId;
    const headers = this.GetHttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    return this.http.get(url, {
      headers
    });
  }

  getAllUsers(): Observable<any> {

    const url = environment.apiUrl + 'api/user/';
    const headers = this.GetHttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    return this.http.get(url, {
      headers
    });
  }

  public GetHttpHeaders(): HttpHeaders {
    return new HttpHeaders({});
  }

}
