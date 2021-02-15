import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { first } from 'rxjs/operators';
import { Task } from 'src/app/models/task.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  getUser() {
    this.taskService.getAllTasks()
    .pipe(first())
      .subscribe((data: Array<Task>) => {
        const userId = localStorage.getItem('currentUserId');
        const value = data.filter(element => element.user === userId);
        console.log(value);
      },
      (error) => {console.log(error)});
  }

}
