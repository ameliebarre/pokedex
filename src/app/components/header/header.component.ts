import { Component, OnInit } from '@angular/core';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';

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
  ) {
    library.add(faBell);
  }

  ngOnInit() {
      this.user = this.authService.getSession();
  }

  logout() {
    this.authService.logout();
  }

}
