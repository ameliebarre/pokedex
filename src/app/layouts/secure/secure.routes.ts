import { Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { TrainerComponent } from '../../components/trainer/trainer.component';

export const SECURE_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'trainer', component: TrainerComponent }
    ]
  }
];
