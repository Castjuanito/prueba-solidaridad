import { Component, OnInit, Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Stat } from 'src/app/models/status.enum';
import { Task } from 'src/app/models/task.model';
import { NgForm } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-popup-edit-task',
  templateUrl: './popup-edit-task.component.html',
  styleUrls: ['./popup-edit-task.component.scss'],
})
export class PopupEditTaskComponent implements OnInit {

  task: Task;
  @Input() pk : string;
  @Input() user : string;
  @Input() name : string;
  @Input() status : Stat;
  @Input() created : Date;
  @Input() due_date : Date;
  @Input() realization_date : Date;
  @Input() priority : any;



  constructor(
    public modalController: ModalController,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.task = {'pk' : this.pk,
      'user' : this.user,
      'name' : this.name,
      status : this.status,
      'created' : this.created,
      'due_date' : this.due_date,
      'realization_date' : this.realization_date,
       priority : this.priority
      };

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  editTask(form?: NgForm){
    form.value;
    this.task;
    this.taskService.editTask(form.value)
    .pipe(first())
      .subscribe((data: any) => {
        this.dismiss();

      },
      (error) => {console.log(error)});
  }


}
