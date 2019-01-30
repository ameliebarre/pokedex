import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import * as CryptoJS from 'crypto-js';

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
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrManager
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.profile = new User(user);

    // Check if user is admin
    const index = this.profile.permissions.indexOf('ADMIN');
    if (index !== -1) {
      this.isAdmin = true;
    }

    this.setUserForm();
  }

  setUserForm() {
    this.userForm = this.fb.group({
      _id: [this.profile._id],
      username: [this.profile.username, Validators.required],
      email: [this.profile.email, Validators.required],
      password: [this.profile.password, Validators.required],
      name: [this.profile.name],
      firstname: [this.profile.firstname],
      birthdate: [this.profile.birthdate],
      sex: [this.profile.sex],
      city: [this.profile.city],
      zipcode: [this.profile.zipcode],
      phone: [this.profile.phone],
      country: [this.profile.country],
      trainer: [this.profile.trainer],
      pokemons: [this.profile.pokemons],
    });

    this.userForm.controls['email'].disable(); // Disable email field (no change allowed)
  }

  save() {

    this.profile = this.userForm.value;
    this.profile['_id'] = this.profile._id;

    this.userService.udateProfile(this.profile).subscribe((user: User) => {
      console.log('passe ici');
      this.toastr.successToastr('Les modifications ont bien été prise en compte', '', { position: 'bottom-right' });
    }, (error: HttpErrorResponse) => {
      console.log('passe là');
      this.toastr.errorToastr('La modification de votre profil a échoué', '', { position: 'bottom-right' });
    });
  }

}
