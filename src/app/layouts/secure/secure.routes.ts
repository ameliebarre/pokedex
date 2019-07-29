import { Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

export const SECURE_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'games',
    loadChildren: '../../modules/game/game.module#GameModule'
  },
  {
    path: 'consoles',
    loadChildren: '../../modules/console/console.module#ConsoleModule'
  }
];
