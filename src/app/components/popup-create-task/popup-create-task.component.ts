import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { Priority } from 'src/app/models/priority.enum';
import { Stat } from 'src/app/models/status.enum';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-popup-create-task',
  templateUrl: './popup-create-task.component.html',
  styleUrls: ['./popup-create-task.component.scss'],
})
export class PopupCreateTaskComponent implements OnInit {

  constructor(private taskService: TaskService , public modalController: ModalController) { }
  task: Task = {'name' : '', status : Stat.pending ,'created' : new Date() ,'due_date' : new Date(), 'priority' : Priority.high};
  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  createTask(form?: NgForm){
    form.value;
    this.task;
    this.taskService.addTask(form.value)
    .pipe(first())
      .subscribe((data: any) => {
        this.dismiss();

      },
      (error) => {console.log(error)});
  }

}
