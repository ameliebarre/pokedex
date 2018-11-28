import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  submitted = false;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.setLoginForm();
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.loginForm.controls;
  }

  setLoginForm() {
    this.loginForm = this.fb.group({
      email: [this.email, Validators.required, Validators.email],
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
          this.authService.storeUserData(res);
          location.pathname = '/home'; // Navigate + Reload to home
        }
      }, (error) => {
        console.log(error);
      }
    );
  }
}
