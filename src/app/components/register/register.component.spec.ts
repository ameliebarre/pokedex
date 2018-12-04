import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ng6-toastr-notifications';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from '../../shared/services/auth.service';

describe('RegisterComponent', () => {
  let comp: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
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
        ToastrModule.forRoot(),
        RouterTestingModule
      ],
      providers: [
        JwtHelperService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    comp = fixture.componentInstance;

    authService = fixture.debugElement.injector.get(AuthService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(comp.registerForm.valid).toBeFalsy();
  });

  it('should test name field validity', () => {
    let errors = {};
    const name = comp.registerForm.controls['name'];
    expect(name.valid).toBeFalsy();

    // Name field is required
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set name with value
    name.setValue('John Smith');
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('should test email field validity', () => {
    let errors = {};
    const email = comp.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email value with wrong pattern
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();

    // Set email with right pattern
    email.setValue('test@gmail.com');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('should test password field validity', () => {
    let errors = {};
    const password = comp.registerForm.controls['password'];
    expect(password.valid).toBeFalsy();

    // Password field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set password with value
    password.setValue('xylHWGUyvd');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('should register user', () => {

    expect(comp.registerForm.valid).toBeFalsy();

    comp.registerForm.controls['name'].setValue('John Smith');
    comp.registerForm.controls['email'].setValue('john.smith@test.com');
    comp.registerForm.controls['password'].setValue('xylHWGUyvd');
    comp.registerForm.controls['confirmPassword'].setValue('xylHWGUyvd');

    spyOn(authService, 'register').and.callThrough();

    comp.onSubmit();

    expect(comp.registerForm.valid).toBeTruthy();
    expect(authService.register).toHaveBeenCalled();
  });
});
