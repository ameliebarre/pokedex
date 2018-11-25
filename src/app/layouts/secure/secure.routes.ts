import { Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { HomeComponent } from '../../components/home/home.component';

export const SECURE_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];
