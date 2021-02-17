import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Task } from '../models/task.model';
import { Priority } from '../models/priority.enum';




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

  addTask(task: any): Observable<any> {

    const priority = Priority[task.priority];
    const body: Task = {
      user : localStorage.getItem('currentUserId'),
      name :task.name,
      status :task.status,
      created :new Date(),
      due_date :task.due_date,
      priority ,
    }
    const url = environment.apiUrl + 'api/task/';
    const headers = this.GetHttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    return this.http.post(url, body, {
      headers,
      observe: 'response'
    });
  }

  editTask(etask: any): Observable<any> {

    const priority = Priority[etask.priority];
    const body: any = {
      name :etask.name,
      status :etask.status,
      due_date :etask.due_date,
      priority ,
    }
    const url = environment.apiUrl + 'api/task/'+ etask.pk;
    const headers = this.GetHttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    return this.http.put(url, body, {
      headers,
      observe: 'response'
    });
  }


  public GetHttpHeaders(): HttpHeaders {
    return new HttpHeaders({});
  }
}
