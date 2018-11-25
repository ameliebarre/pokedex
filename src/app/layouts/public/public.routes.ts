import { Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import {HomeComponent} from '../../components/home/home.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
