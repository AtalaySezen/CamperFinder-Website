import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  isAuth: boolean = false;

  canActivate() {
    if (this.auth.IsLoggedIn()) {
      return true;}
    this.router.navigate(['login']);
    return false;
  };


  isAuthenticated() {
    let local = localStorage.getItem('isLogged');
    if (local == 'true') {
      this.isAuth == true;
    } else if (local == 'false') {
      this.isAuth == false;
    }
  };


  logOut() {
    this.isAuth = false;
  };



}
