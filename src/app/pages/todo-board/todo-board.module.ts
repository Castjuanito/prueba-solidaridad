import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoBoardPageRoutingModule } from './todo-board-routing.module';

import { TodoBoardPage } from './todo-board.page';
import {TaskPanelComponent} from '../../components/task-panel/task-panel.component';
import {TaskItemComponent} from '../../components/task-item/task-item.component';
import { PopupCreateTaskComponent } from 'src/app/components/popup-create-task/popup-create-task.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoBoardPageRoutingModule
  ],
  declarations: [TodoBoardPage, TaskPanelComponent, TaskItemComponent, PopupCreateTaskComponent ]
})
export class TodoBoardPageModule {}
