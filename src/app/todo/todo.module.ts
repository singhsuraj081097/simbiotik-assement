import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { TodoFormComponent } from './todo-form.component';
@NgModule({
  declarations:[TodoListComponent, TodoFormComponent],
  imports:[CommonModule, FormsModule, RouterModule.forChild([
    { path: '', component: TodoListComponent },
    { path: 'new', component: TodoFormComponent },
    { path: ':id', component: TodoFormComponent }
  ])]
})
export class TodoModule {}
