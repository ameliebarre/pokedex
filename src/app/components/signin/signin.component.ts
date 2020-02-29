import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;
  submitted = false;
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['home']);
    }

    this.setLoginForm();
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.loginForm.controls;
  }

  setLoginForm() {
    this.loginForm = this.fb.group({
      email: [this.email, Validators.compose([Validators.required, Validators.email])],
      password: [this.password, Validators.required]
    });
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.email = this.loginForm.controls['email'].value;
    this.password = this.loginForm.controls['password'].value;

    this.authService.login(this.email, this.password).subscribe(
      (res: any) => {
        if (res) {
          location.pathname = '/home'; // Navigate + Reload to home
        }
      }, (error) => {
        if (error.error.message === 'USER_NOT_FOUND') {
          this.errorMessage = 'L\'adresse mail ou le mot de passe ne semblent pas exister.';
        }
        console.log(error);
      }
    );
  }
}
