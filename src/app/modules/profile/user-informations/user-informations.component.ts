import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

import { User } from '../../../shared/models/user.model';
import { UserService } from '../../../shared/services/user.service';
import { Trainer } from '../../../shared/models/trainer';
import { TrainerService } from '../../../shared/services/trainer.service';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.scss']
})
export class UserInformationsComponent implements OnInit {

  public profile: User;
  public isAdmin: boolean;
  public trainers: Trainer[] = [];
  public trainer: Trainer;
  public selectedTrainer: Trainer;

  // Form
  public userForm: FormGroup;

  constructor(
    private userService: UserService,
    private trainerService: TrainerService,
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

    this.getAllTrainers();

    console.log(this.profile);
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
      pokemons: [this.profile.pokemons],
    });
  }

  updateProfile() {
    this.profile = this.userForm.value;

    localStorage.setItem('user', JSON.stringify(this.profile)); // Set new user data in local storage

    this.userService.udateProfile(this.profile).subscribe((user: User) => {
      this.toastr.successToastr('Les modifications ont bien été prise en compte', '', { position: 'bottom-right' });
      setTimeout(function() {
        window.location.reload(); // Reload page
      }, 1000);

    }, (error: HttpErrorResponse) => {
      this.toastr.errorToastr('La modification de votre profil a échoué', '', { position: 'bottom-right' });
    });
  }

  getAllTrainers() {
    this.trainerService.getTrainers().subscribe((trainers: Trainer[]) => {
      this.trainers = trainers;
    }, (error: HttpErrorResponse) => {
      console.log(error.message);
    });
  }

  chooseTrainer(trainer: Trainer): void {
    this.selectedTrainer = trainer;
    this.profile.trainer = new Trainer(trainer);
  }

  updateTrainer(): void {

    if (!this.selectedTrainer) {
      this.toastr.errorToastr('Vous n\'avez pas sélectionné de dresseur Pokemon.', '', { position: 'bottom-right' });
    } else {
      // Assign the selected trainer to the profile
      this.profile.trainer = this.selectedTrainer;

      localStorage.setItem('user', JSON.stringify(this.profile)); // Set new user data in local storage

      this.userService.updateProfileTrainer(this.profile, this.selectedTrainer).subscribe((user: User) => {
        this.toastr.successToastr('Les modifications ont bien été prise en compte', '', { position: 'bottom-right' });
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      });
    }
  }

}
