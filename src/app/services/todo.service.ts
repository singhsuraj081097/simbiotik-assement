import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class TodoService {
 // api = 'https://du-test-api.simbiotiktech.in/swagger/#/todos/TodoController_create';
  constructor(private http: HttpClient) {}
  list() { return this.http.get<any[]>('https://du-test-api.simbiotiktech.in/swagger/#/todos/TodoController_getAll'); }
  get(id:any){ return this.http.get<any>(`https://du-test-api.simbiotiktech.in/swagger/#/todos/TodoController_getAll/${id}`); }
  create(payload:any){ return this.http.post('https://du-test-api.simbiotiktech.in/swagger/#/todos/TodoController_create', payload); }
  update(id:any, payload:any){ return this.http.put(`https://du-test-api.simbiotiktech.in/swagger/#/todos/TodoController_update/${id}`, payload); }
  delete(id:any){ return this.http.delete(`https://du-test-api.simbiotiktech.in/swagger/#/todos/TodoController_delete/${id}`); }
}
