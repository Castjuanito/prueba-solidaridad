import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { ModalController } from '@ionic/angular';
import { PopupCreateTaskComponent } from 'src/app/components/popup-create-task/popup-create-task.component';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.page.html',
  styleUrls: ['./todo-board.page.scss'],
})
export class TodoBoardPage implements OnInit {

  pendingTasks: Array<Task>;
  overdueTasks: Array<Task>;
  finishedTasks: Array<Task>;

  constructor(
    private taskService : TaskService,
    public modalController: ModalController
  ) { }

  ngOnInit() {

    this.getTasks();

  }

  filterStatus (element : Task, status : String, userId : String) {
    if (element.status === status && element.user === userId) {
      return true;
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PopupCreateTaskComponent,
      cssClass: 'my-custom-class'
    });
     await modal.present();
     const { data } = await modal.onDidDismiss();
    if (data) {
      this.getTasks();
    }
  }


  getTasks() {

    this.taskService.getAllTasks().pipe(first())
    .subscribe((data: Array<Task>) => {
    const userId =  localStorage.getItem('currentUserId')
      this.pendingTasks = data.filter(element => this.filterStatus(element,"pending",userId));
      this.overdueTasks = data.filter(element => this.filterStatus(element,"overdue",userId));
      this.finishedTasks = data.filter(element => this.filterStatus(element,"finished",userId));
    },
    (error) => {console.log(error)});

  }


}
