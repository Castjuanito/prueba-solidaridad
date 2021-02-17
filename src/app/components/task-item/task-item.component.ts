import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Stat } from 'src/app/models/status.enum';
import { PopupEditTaskComponent } from '../popup-edit-task/popup-edit-task.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {

 color : string = 'black';
 @Input() task: any;
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    if (this.task.due_date > new Date()){
      this.task.status = Stat.pending;
      this.color = 'red';
    }
  }

  async showDetail(){
    const modal = await this.modalController.create({
      component: PopupEditTaskComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'pk' : this.task.pk,
        'user' : this.task.user,
        'name' : this.task.name,
        'status' : this.task.status,
        'created' : this.task.created,
        'due_date' : this.task.due_date,
        'realization_date' : this.task.realization_date,
        'priority' : this.task.priority,
      }
    });
    return await modal.present();
  }

}
