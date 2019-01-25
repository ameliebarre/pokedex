import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../../shared/models/user.model';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.scss']
})
export class UserInformationsComponent implements OnInit {

  public profile: User;
  public isAdmin: boolean;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.getProfile(user.id);
  }

  getProfile(id: number) {
    this.userService.getProfile(id).subscribe((user: User) => {
      this.profile = user;

      const index = this.profile.permissions.indexOf('ADMIN');
      if (index !== -1) {
        this.isAdmin = true;
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
