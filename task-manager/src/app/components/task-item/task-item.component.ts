import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
    @Input() task!: Task;

    constructor(private taskService: TaskService) { }

    toggleCompletion() {
        this.taskService.toggleTask(this.task.id);
    }

    deleteTask() {
        this.taskService.deleteTask(this.task.id);
    }
}
