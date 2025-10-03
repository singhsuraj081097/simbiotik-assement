import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './weather.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations:[WeatherComponent],
  imports:[CommonModule, FormsModule,RouterModule.forChild([{path:'',component:WeatherComponent}])]
})
export class WeatherModule {}
