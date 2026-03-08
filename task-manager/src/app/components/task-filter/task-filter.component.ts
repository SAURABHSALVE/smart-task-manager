import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskFilter } from '../../models/task.model';

@Component({
    selector: 'app-task-filter',
    templateUrl: './task-filter.component.html',
    styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent implements OnInit {
    currentFilter: TaskFilter = 'all';

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.taskService.filter$.subscribe(filter => {
            this.currentFilter = filter;
        });
    }

    setFilter(filter: TaskFilter) {
        this.taskService.setFilter(filter);
    }
}
