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
    loadChildren: () => import('../../modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'games',
    loadChildren: () => import('../../modules/game/game.module').then(m => m.GameModule)
  },
  {
    path: 'consoles',
    loadChildren: () => import('../../modules/console/console.module').then(m => m.ConsoleModule)
  },
  {
    path: 'pokemons',
    loadChildren: () => import('../../modules/pokemon/pokemon.module').then(m => m.PokemonModule)
  }
];
