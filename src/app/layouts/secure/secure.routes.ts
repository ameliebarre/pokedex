import { Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

export const SECURE_ROUTES: Routes = [
  {
    path: 'intro',
    loadChildren: 'src/app/modules/intro/intro.module#IntroModule'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '**', component: HomeComponent },
];
