import { ChangeDetectionStrategy ,Component, OnInit , Input} from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-task-panel',
  styleUrls: ['./task-panel.component.scss'],
  templateUrl: './task-panel.component.html',


  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPanelComponent implements OnInit {

  @Input() tasks: Array<Task>;
  @Input() tittle: String;

  constructor() { }

  ngOnInit() {}

}
