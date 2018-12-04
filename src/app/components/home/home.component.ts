import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any[] = [];
  token: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user'));
    this.token = localStorage.getItem('token');
  }

}
