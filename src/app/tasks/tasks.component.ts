import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

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

  tasks = [
    {
      id: 't1',
      userId: 'u2',
      title: 'Angular Project',
      summary:
        'Implementing all the basic and advanced features of Angular and applying them onto this project.',
      dueDate: '2024-June-15',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Building first prototype',
      summary:
        'First project is going to be to build a first prototype of the online shop website.',
      dueDate: '2024-June-20',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue templates',
      summary:
        'Prepare and describe an issue template which will help with the project management.',
      dueDate: '2024-June-25',
    },
  ];
  get selectedUsertasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onStartAddTasks() {
    this.isAddingTask = true;
  }
  onCancelAddTasks() {
    this.isAddingTask = false;
  }
  onAddTasks(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}
