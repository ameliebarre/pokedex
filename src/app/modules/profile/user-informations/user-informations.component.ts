import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../../shared/models/user.model';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.scss']
})
export class UserInformationsComponent implements OnInit {

  public profile: User;
  public isAdmin: boolean;

  // Form
  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.profile = new User(user);

    console.log(this.profile);

    // Check if user is admin
    const index = this.profile.permissions.indexOf('ADMIN');
    if (index !== -1) {
      this.isAdmin = true;
    }

    this.setUserForm();
  }

  setUserForm() {
    this.userForm = this.fb.group({
      username: [this.profile.username, Validators.required],
      email: [this.profile.email, Validators.required],
      password: [this.profile.password, Validators.required],
      name: [this.profile.name],
      firstname: [this.profile.firstname],
      birthdate: [this.profile.birthdate],
      sex: [this.profile.sex],
      city: [this.profile.city],
      zipcode: [this.profile.zipcode],
      country: [this.profile.country],
    });

    this.userForm.controls['email'].disable(); // Disable email field (no change allowed)
  }

}
