import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';


@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.page.html',
  styleUrls: ['./todo-board.page.scss'],
})
export class TodoBoardPage implements OnInit {

  pendingTasks: Array<Task>;
  overdueTasks: Array<Task>;


  constructor() { }

  ngOnInit() {




    this.pendingTasks = [
      { pk: '1',
        name :'task 1',
        user :'',
        status : 'pending',
        created :new Date("Fri Dec 08 2019 07:44:57"),
        due_date :new Date("Fri Dec 08 2019 07:44:57"),
        realization_date :new Date(),
        priority :1},

        { pk: '2',
        name :'task 2',
        user :'',
        status : 'pending',
        created :new Date(),
        due_date :new Date(),
        realization_date :new Date(),
        priority :1}
    ];
  }

  addTask(){

  }

}
