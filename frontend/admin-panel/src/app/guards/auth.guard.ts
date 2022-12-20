import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuth: boolean = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }


  isAuthenticated() {
    let local = localStorage.getItem('isLogged');

    if (local == 'true') {
      return true;
    } else {
      return false;
    }
  };

  login() {
    this.isAuth = true;
  };

  logOut() {
    this.isAuth = false;
  };

}
