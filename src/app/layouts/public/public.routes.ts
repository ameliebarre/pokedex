import { Routes } from '@angular/router';

import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  }
];
