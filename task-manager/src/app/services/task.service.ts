import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task, TaskFilter } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private readonly STORAGE_KEY = 'smart-task-manager-tasks';

    private tasksSubject = new BehaviorSubject<Task[]>([]);
    public tasks$ = this.tasksSubject.asObservable();

    private filterSubject = new BehaviorSubject<TaskFilter>('all');
    public filter$ = this.filterSubject.asObservable();

    constructor() {
        this.loadTasks();
    }

    private loadTasks(): void {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
            try {
                const parsed: Task[] = JSON.parse(saved);
                this.tasksSubject.next(parsed);
            } catch (e) {
                console.error('Error parsing tasks from local storage', e);
                this.tasksSubject.next([]);
            }
        }
    }

    private saveTasks(tasks: Task[]): void {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
        this.tasksSubject.next(tasks);
    }

    public addTask(title: string): void {
        const current = this.tasksSubject.getValue();
        const newTask: Task = {
            id: crypto.randomUUID(),
            title: title.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };
        this.saveTasks([newTask, ...current]);
    }

    public deleteTask(id: string): void {
        const current = this.tasksSubject.getValue();
        this.saveTasks(current.filter(t => t.id !== id));
    }

    public toggleTask(id: string): void {
        const current = this.tasksSubject.getValue();
        const updated = current.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        );
        this.saveTasks(updated);
    }

    public setFilter(filter: TaskFilter): void {
        this.filterSubject.next(filter);
    }

    public clearAllTasks(): void {
        this.saveTasks([]);
    }
}
