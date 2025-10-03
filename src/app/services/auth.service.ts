import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  api = 'https://du-test-api.simbiotiktech.in/swagger/#/users/UserController_login'; // json-server base mapped in routes
  tokenKey = 'demo_token';
  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    // Use mock API: POST /login returns user object
    // json-server cannot handle login; we simulate with users resource
    return this.http.get<any[]>(`${this.api}/users?email=${encodeURIComponent(email)}`).pipe(
      map(users => {
        const user = users && users[0];
        if (user && password === 'password') {
          localStorage.setItem(this.tokenKey, 'demo-token');
          return user;
        }
        throw new Error('Invalid credentials. Use any email and password "password".');
      })
    );
  }
  logout() { localStorage.removeItem(this.tokenKey); }
  isLoggedIn(){ return !!localStorage.getItem(this.tokenKey); }
}
