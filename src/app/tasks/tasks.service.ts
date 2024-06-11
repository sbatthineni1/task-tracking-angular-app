import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
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
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    };
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  Aadtask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }
  removeTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
