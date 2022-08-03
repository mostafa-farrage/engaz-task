import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { catchError, defer, from, map, Observable, switchMap, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private router: Router,) {}
  /* Register */
  Register(data: { email: string; password: string; }): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, data.email, data.password))
      .pipe(
        map(credential => credential.user),
      );
  }
  /* Login */
  Login(data: { email: string; password: string; }): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, data.email, data.password))
      .pipe(
        map(credential => credential.user),);
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
  SetToken(token: string) {
    localStorage.setItem('token', token);
  }
  RemoveToken() {
    localStorage.removeItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
