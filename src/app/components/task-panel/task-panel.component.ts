import { ChangeDetectionStrategy ,Component, OnInit , Input} from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-panel',
  styleUrls: ['./task-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      {{tittle}}
    </p>
    <ion-list>
    <div *ngFor="let task of tasks">
    <ion-item>
    <ion-label>{{task.name}}</ion-label>
    </ion-item>
    </div>
    </ion-list>
  `
})
export class TaskPanelComponent implements OnInit {

  @Input() tasks: Array<Task>;
  @Input() tittle: String;

  constructor() { }

  ngOnInit() {}

}
