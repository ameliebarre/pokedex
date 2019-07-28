import { Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

export const SECURE_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: '../../modules/profile/profile.module#ProfileModule'
  }
];
