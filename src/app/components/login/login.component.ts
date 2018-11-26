import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public mail: string;
  public password: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log('Submit login form');

    this.authService.login(this.mail, this.password).subscribe((result) => {
      console.log(result);
    });
  }
}
