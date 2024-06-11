import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUsertasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  // onCompleteTask(id: string) {}
  onStartAddTasks() {
    this.isAddingTask = true;
  }
  onCloseAddTasks() {
    this.isAddingTask = false;
  }
}
