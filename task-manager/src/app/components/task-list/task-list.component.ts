import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task, TaskFilter } from '../../models/task.model';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    filteredTasks$: Observable<Task[]>;

    constructor(private taskService: TaskService) {
        this.filteredTasks$ = combineLatest([
            this.taskService.tasks$,
            this.taskService.filter$
        ]).pipe(
            map(([tasks, filter]) => {
                if (filter === 'completed') return tasks.filter(t => t.completed);
                if (filter === 'pending') return tasks.filter(t => !t.completed);
                return tasks;
            })
        );
    }

    ngOnInit(): void { }

    trackById(index: number, task: Task): string {
        return task.id;
    }
}
