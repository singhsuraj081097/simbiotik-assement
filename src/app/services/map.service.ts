import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})
export class MapService {
  // This is a stub. For real app integrate Nominatim/OSRM.
  geocode(q: string){ return Promise.resolve([{ display_name: q, lat: 12.97, lon:77.59 }]); }
  route(start:any, end:any){ return Promise.resolve({distance_m:10000, duration_s:900}); }
}
