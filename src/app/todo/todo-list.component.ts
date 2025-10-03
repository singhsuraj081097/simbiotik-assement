import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
@Component({
  template: `
  <div>
    <h2 class="text-xl font-bold mb-4">TODOs</h2>
    <a routerLink="/todos/new" class="bg-green-600 text-white px-3 py-1 rounded">New TODO</a>
    <table class="w-full mt-4 bg-white">
      <tr *ngFor="let t of todos" class="border-b">
        <td class="p-2">{{t.id}}</td>
        <td class="p-2">{{t.title}}</td>
        <td class="p-2">
          <a [routerLink]="['/todos',t.id]" class="text-blue-600">Edit</a>
        </td>
      </tr>
    </table>
  </div>
  `
})
export class TodoListComponent implements OnInit {
  todos:any[] = [];
  constructor(private svc: TodoService) {}
  ngOnInit(){ this.load(); }
  load(){ this.svc.list().subscribe(res=> this.todos = res || []); }
}
