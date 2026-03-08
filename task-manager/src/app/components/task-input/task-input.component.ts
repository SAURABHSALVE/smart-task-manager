import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-task-input',
    templateUrl: './task-input.component.html',
    styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {
    taskTitle: string = '';

    constructor(private taskService: TaskService) { }

    addTask() {
        if (this.taskTitle.trim()) {
            this.taskService.addTask(this.taskTitle);
            this.taskTitle = '';
        }
    }
}
