import { Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { IntroComponent } from '../intro/intro.component';
import { INTRO_ROUTES } from '../intro/intro.routes';

export const SECURE_ROUTES: Routes = [
  {
    path: 'intro',
    component: IntroComponent,
    children: INTRO_ROUTES
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];
