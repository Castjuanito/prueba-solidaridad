import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoBoardPageRoutingModule } from './todo-board-routing.module';

import { TodoBoardPage } from './todo-board.page';
import {TaskPanelComponent} from '../../components/task-panel/task-panel.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoBoardPageRoutingModule
  ],
  declarations: [TodoBoardPage, TaskPanelComponent ]
})
export class TodoBoardPageModule {}
