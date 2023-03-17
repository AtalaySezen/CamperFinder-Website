import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private auth:AuthService) { }

  isAuth: boolean = false;

  canActivate() {
    let token = localStorage.getItem('token');
    if (token == "true") {
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }


  
}
