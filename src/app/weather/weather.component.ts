import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
@Component({
  template: `
  <div>
    <h2 class="text-xl font-bold mb-4">Weather</h2>
    <input [(ngModel)]="city" class="border p-2 rounded" placeholder="City">
    <button class="ml-2 bg-blue-600 text-white px-3 py-1 rounded" (click)="load()">Search</button>
    <div *ngIf='loading' class="mt-4 p-2 bg-blue-100">Loading...</div>
    <div *ngIf='error' class="mt-4 p-2 bg-yellow-100 text-yellow-800">{{error}}</div>
    <div *ngIf='current' class="mt-4">
      <h3>{{current.city}} - {{current.tempC}}°C</h3>
      <p>{{current.description}}</p>
    </div>
    <div *ngIf='forecast' class="mt-4">
      <h4>7-day forecast</h4>
      <ul>
        <li *ngFor="let d of forecast.days">{{d.day}} : {{d.avgC}}°C</li>
      </ul>
    </div>
  </div>
  `
})
export class WeatherComponent implements OnInit {
  city='Bengaluru';
  loading=false; error=''; current:any; forecast:any;
  constructor(private svc:WeatherService){}
  ngOnInit(){ this.load(); }
  load(){
    this.loading=true; this.error=''; this.current=null; this.forecast=null;
    this.svc.getCurrent(this.city).subscribe({
      next: c=> { this.current = c; this.svc.getForecast(this.city).subscribe(f=> { this.forecast = f; this.loading=false; }); },
      error: e=> { this.error = 'Failed to fetch'; this.loading=false; }
    });
  }
}
