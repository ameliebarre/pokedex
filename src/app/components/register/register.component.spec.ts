import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ng6-toastr-notifications';
import { RouterTestingModule } from '@angular/router/testing';
import {AuthService} from '../../shared/services/auth.service';

fdescribe('RegisterComponent', () => {
  let comp: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;
  const formBuilder: FormBuilder = new FormBuilder();


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

  it('should register user', () => {
    comp.registerForm.controls['name'].setValue('John Smith');
    comp.registerForm.controls['email'].setValue('john.smith@test.com');
    comp.registerForm.controls['password'].setValue('xylHWGUyvd');
    comp.registerForm.controls['confirmPassword'].setValue('xylHWGUyvd');

    spyOn(authService, 'register').and.callThrough();

    comp.onSubmit();

    expect(comp.registerForm.errors).toBeFalsy();
    expect(authService.register).toHaveBeenCalled();
  });
});
