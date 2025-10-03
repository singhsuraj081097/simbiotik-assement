import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations:[MapComponent],
  imports:[CommonModule,FormsModule, RouterModule.forChild([{path:'',component:MapComponent}])]
})
export class MapModule {}
