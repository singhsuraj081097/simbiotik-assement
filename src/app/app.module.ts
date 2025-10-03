import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TodoModule } from './todo/todo.module';
import { WeatherModule } from './weather/weather.module';
import { MapModule } from './map/map.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TodoModule,
    WeatherModule,
    MapModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', component: LayoutComponent, children: [
        { path: 'todos', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
        { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) },
        { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule) },
        { path: '', redirectTo: 'todos', pathMatch: 'full' }
      ]},
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
