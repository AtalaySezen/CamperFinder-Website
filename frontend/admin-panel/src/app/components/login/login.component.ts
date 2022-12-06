import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  user: string = "admin";
  pass: string = "12345";
  warnPass = 'none';
  counter: number = 0;
  maxTry: number = 3
  warnTry = 'none';
  warnMessage: string = ''
  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  loginHref() {
    let localUser = localStorage.getItem('username');
    let localPass = localStorage.getItem('password');
    console.log(this.userName, this.password)
    if (this.userName == this.user && this.password == this.pass) {
      localStorage.setItem('isLogged', 'true')
      this.router.navigate(['home']);
    } else if (localUser === this.userName && this.password == localPass) {
      localStorage.setItem('isLogged', 'true')
      this.router.navigate(['home']);
    }
    else if (this.userName !== this.user && this.password != this.pass && ++this.counter) {
      this.warnPass = 'show';
      this.warnMessage = 'Your username or password is wrong '
      console.log(this.counter)
      console.log(this.maxTry)
      if (this.counter > this.maxTry) {
        this.warnTry = 'warnTry'
        localStorage.setItem('username', 'admin2');
        localStorage.setItem('password', '123456');
        setTimeout(() => {
          location.reload()
        }, 800);
      } else if (localPass!=this.password || this.userName != this.user) {
        this.warnPass = 'show';
        this.warnMessage = 'Your username or password is wrong '
      }
    }
  }

  showPass() {
    this.password = 'text'

  }

}
