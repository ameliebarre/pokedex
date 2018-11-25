import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PublicComponent } from './layouts/public/public.component';
import { PUBLIC_ROUTES } from './layouts/public/public.routes';
import { SecureComponent } from './layouts/secure/secure.component';
import { SECURE_ROUTES } from './layouts/secure/secure.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PublicComponent,
    children: PUBLIC_ROUTES
  },
  {
    path: '',
    component: SecureComponent,
    children: SECURE_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
