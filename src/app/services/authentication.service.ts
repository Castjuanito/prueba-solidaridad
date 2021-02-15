import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { first } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Session } from '../models/session.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Session>;
    public currentUser: Observable<Session>;

    constructor(private http: HttpClient, private userService: UserService) {
        this.currentUserSubject = new BehaviorSubject<Session>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Session {
        return this.currentUserSubject.value;
    }

    login(data: User) {
      const body: any = {
        username: 'pruebajuanito',
        password: 'ABC123456juan'
      }
      const url = environment.apiUrl + 'auth/login/';
      const headers = this.GetHttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    return this.http.post<any>(url, body, {
      headers,
    })
    .pipe(map(Session => {
      localStorage.setItem('currentUser', JSON.stringify(Session));
      this.currentUserSubject.next(Session);
      this.setUserIdLocalStorage(body.username)
      return Session;
    }));
    }

    setUserIdLocalStorage(username : String){
      this.userService.getAllUsers().pipe(first())
      .subscribe((data: Array<User>) => {
        const value = data.find(element => element.username === username);
        localStorage.setItem('currentUserId',value.pk );
      },
      (error) => {console.log(error)});
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    public GetHttpHeaders(): HttpHeaders {
      return new HttpHeaders({});
    }
}
