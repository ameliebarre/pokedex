import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import {MustMatch} from '../../shared/helpers/must-match.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  submitted = false;
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.setRegisterForm();
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.registerForm.controls;
  }

  setRegisterForm() {
    this.registerForm = this.fb.group({
      name: [this.name, Validators.required],
      email: [this.email, Validators.compose([Validators.required, Validators.email])],
      password: [this.password, Validators.required],
      confirmPassword: [this.confirmPassword, Validators.required],
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

}
