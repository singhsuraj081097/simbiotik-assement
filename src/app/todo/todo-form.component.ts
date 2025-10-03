import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
@Component({
  template: `
  <div>
    <h2 class="text-xl font-bold mb-4">{{ isEdit ? 'Edit' : 'Create' }} TODO</h2>
    <form (ngSubmit)='save()'>
      <label class="block mb-2">Title
        <input [(ngModel)]="model.title" name="title" class="w-full border p-2 rounded" required/>
      </label>
      <label class="block mb-2">Description
        <textarea [(ngModel)]="model.description" name="description" class="w-full border p-2 rounded"></textarea>
      </label>
      <button class="bg-blue-600 text-white px-3 py-1 rounded">{{ isEdit ? 'Update' : 'Create' }}</button>
    </form>
  </div>
  `
})
export class TodoFormComponent implements OnInit {
  model:any = { title:'', description:'', isCompleted:true};
  isEdit = false;
  id:any;
  constructor(private route:ActivatedRoute, private svc:TodoService, private router:Router){}
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){ this.isEdit = true; this.svc.get(this.id).subscribe(r=> this.model = r); }
  }
  save(){
    if(this.isEdit){ this.svc.update(this.id,this.model).subscribe(()=> this.router.navigate(['/todos'])); }
    else { this.svc.create(this.model).subscribe(()=> this.router.navigate(['/todos'])); }
  }
}
