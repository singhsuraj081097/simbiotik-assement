import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class WeatherService {
  // Mock weather service: returns fake current temp and 7-day forecast
  getCurrent(city='Bengaluru') {
    return of({ city, tempC: 28, description: 'Partly cloudy' }).pipe(delay(500));
  }
  getForecast(city='Bengaluru') {
    const days = Array.from({length:7}).map((_,i)=>({day:i, avgC: 25 + i}));
    return of({ city, days }).pipe(delay(700));
  }
}
