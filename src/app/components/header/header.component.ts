import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    this.authService.logout();
  }

}
