import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';

@NgModule({
    declarations: [
        AppComponent,
        TaskInputComponent,
        TaskListComponent,
        TaskItemComponent,
        TaskFilterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
