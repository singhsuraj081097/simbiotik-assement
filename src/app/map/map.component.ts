import { Component } from '@angular/core';
import { MapService } from '../services/map.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  template: `
  <div>
    <h2 class="text-xl font-bold mb-4">Map & Routing (Demo)</h2>
    <label>From <input [(ngModel)]="from" class="border p-2 rounded"/></label>
    <label class="ml-2">To <input [(ngModel)]="to" class="border p-2 rounded"/></label>
    <button class="ml-2 bg-blue-600 text-white px-3 py-1 rounded" (click)="calc()">Route</button>
    <div *ngIf='loading' class="mt-4">Calculating...</div>
    <div *ngIf='route' class="mt-4">
      <div>Distance: {{route.distance_m}} m</div>
      <div>Duration: {{route.duration_s}} s</div>
    </div>
  </div>
  `
})
export class MapComponent {
  from='Bengaluru'; to='Mysuru'; loading=false; route:any;
  constructor(private svc:MapService){}
  calc(){ this.loading=true; this.route=null; this.svc.route(this.from,this.to).then(r=>{ this.route=r; this.loading=false; }).catch(()=>{ this.loading=false; }); }
}
