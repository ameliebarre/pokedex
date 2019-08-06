import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

import { AuthService } from '../../shared/services/auth.service';
import { RegistrationValidator } from '../../shared/validators/registration.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  submitted = false;
  registerForm: FormGroup;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrManager,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['home']);
    }

    this.setRegisterForm();
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.registerForm.controls;
  }

  setRegisterForm() {

    this.registerForm = this.fb.group({
      username: [this.username, Validators.required],
      email: [this.email, Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
      password: [this.password, Validators.required],
      confirmPassword: [this.confirmPassword, Validators.required],
    }, {
      validator: RegistrationValidator.matchPassword
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.username = this.registerForm.controls['username'].value;
    this.email = this.registerForm.controls['email'].value;
    this.password = this.registerForm.controls['password'].value;

    this.authService.register(this.username, this.email, this.password).subscribe(
      (res: any) => {
        this.toastr.successToastr('Merci de votre inscription, vous pouvez désormais vous connecter', '', { position: 'bottom-right' });
        this.router.navigate(['/signin']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );
  }

}
