import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = 'admin';
  password: any = 'admin123';

  constructor(private router: Router, private fb: FormBuilder, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  loginForm = this.fb.group({
    password: (['', [Validators.required, Validators.minLength(4)]]),
    username: (['', [Validators.required, Validators.maxLength(5)]])
  });

  get f(): { [key: string]: AbstractControl } {  //this.loginForm.control
    return this.loginForm.controls;
  };

  loginHref() {
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    if (this.username == username&&this.password == password) {
      localStorage.setItem('isLogged', 'true');
      this.snack.open('Eşleşti', 'Hoşgeldin');
      this.router.navigate(['/home']);
    } else {
      localStorage.setItem('isLogged', 'false');
      this.snack.open('Hatalı Şifre Ya Da Kullanıcı Adı', 'Anladım');
    }
  };


}
