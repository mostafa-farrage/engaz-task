import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()

export class AuthGuardService implements CanActivate {
  constructor(public _authService: AuthService,private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const loggedin = this._authService.isLoggedIn; 
    if (!loggedin) {
      this.router.navigate(['/login']);
    }
    return loggedin;
  }
}