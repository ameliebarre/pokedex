import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ng6-toastr-notifications';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthService } from './shared/services/auth.service';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent,
    SecureComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    }),
    RouterModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    PokemonModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor() {
    library.add(faBell, faSignOutAlt);
  }
}

export function tokenGetter() {
  return localStorage.getItem('token');
}
