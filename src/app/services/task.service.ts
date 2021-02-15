import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Task } from '../models/task.model';




@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTask( userId : String): Observable<any> {
    const url = environment.apiUrl + 'api/task/' + userId;
    const headers = this.GetHttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    return this.http.get(url, {
      headers
    });
  }

  getAllTasks(): Observable<any> {
    const url = environment.apiUrl + 'api/task/';
    const headers = this.GetHttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    return this.http.get(url, {
      headers
    });
  }

  addTask(task: Task): Observable<any> {
    const body: Task = {
      user :task.user,
      name :task.name,
      status :task.status,
      created :task.created,
      due_date :task.due_date,
      realization_date :task.realization_date,
      priority :task.priority,
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


  public GetHttpHeaders(): HttpHeaders {
    return new HttpHeaders({});
  }
}
