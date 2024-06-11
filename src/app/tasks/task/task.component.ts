import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { type Task } from './task.model';
import { OutletContext } from '@angular/router';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();
  private taskService = inject(TasksService);

  onCompleteTask(){
    this.taskService.removeTasks(this.task.id);
  }
}
