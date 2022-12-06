import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  isAuth :boolean = false;
  isAuthenticated(){
    let local = localStorage.getItem('isLogged');

    if(local == 'true'){
      return true;
    }else{
      return false;
    }
  }
  
  login(){
    this.isAuth = true;
  }
  logOut(){
    this.isAuth = false;

  }
  
}
