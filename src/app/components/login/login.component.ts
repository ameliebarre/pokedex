import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public submitted = false;
  public loginForm: FormGroup;
  public errorMessage: string;

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

    if (this.loginForm.invalid) {
      return;
    }

    this.email = this.loginForm.controls['email'].value;
    this.password = this.loginForm.controls['password'].value;

    this.authService.signin(this.email, this.password);
  }
}
