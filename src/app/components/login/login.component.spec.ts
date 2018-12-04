import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../../shared/services/auth.service';

fdescribe('LoginComponent', () => {
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        JwtModule.forRoot({
          config: {
            tokenGetter: () => {
              return '';
            }
          }
        }),
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;

    authService = fixture.debugElement.injector.get(AuthService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should test email field is not null', () => {
    let errors = {};
    const email = comp.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email with right pattern
    email.setValue('test@gmail.com');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('should test password field is not null', () => {
    let errors = {};
    const password = comp.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();

    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email with right pattern
    password.setValue('xylHWGUyvd');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('should login the user', () => {
    expect(comp.loginForm.valid).toBeFalsy();
    comp.loginForm.controls['email'].setValue('john.smith@test.com');
    comp.loginForm.controls['password'].setValue('xylHWGUyvd');

    expect(comp.loginForm.valid).toBeTruthy();

    spyOn(authService, 'login').and.callThrough();

    comp.onSubmit();

    expect(comp.loginForm.valid).toBeTruthy();
    expect(authService.login).toHaveBeenCalled();

  });
});
