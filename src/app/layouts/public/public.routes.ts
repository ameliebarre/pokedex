import { Routes } from '@angular/router';

import { SignInComponent } from '../../components/signin/signin.component';
import { SignUpComponent } from '../../components/signup/signup.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  }
];
