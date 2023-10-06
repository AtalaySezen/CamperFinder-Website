import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: UntypedFormGroup;

  constructor(private router: Router, private fb: FormBuilder, private snack: MatSnackBar, public fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  };


  loginHref() {
    this.fireAuth.signInWithEmailAndPassword(this.form.value.username, this.form.value.password).then(() => {
      localStorage.setItem('token', 'true'); //Token
      this.router.navigate(['/home']);
    }, err => {
      this.router.navigate(['']);
      console.log(err);
    })

  }

}
