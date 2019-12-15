import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../shared/models/pokemon.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: {
    email: string;
    username: string;
  };

  token: string;
  isNew: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user'));
    this.token = localStorage.getItem('token');

    // Check if it's the first time in the app for the user
    this.getStatus();
  }

  getStatus() {
    // this.isNew = this.authService.isFirstTime();
  }

}
