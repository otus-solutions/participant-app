import { async, TestBed } from '@angular/core/testing';

import { CreateAccountComponent } from './create-account.component';
import {
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule
} from '@angular/material';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountClientService, AuthenticationService, AlertService} from '../../../providers';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {SanitizeHtmlPipe} from '../../../utils';
import {CookieService} from 'ngx-cookie-service';
import { Alert } from 'selenium-webdriver';

describe('CreateAccountComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {
            path: 'dashboard',
            component: CreateAccountComponent
          },
          {
            path: 'login',
            component: CreateAccountComponent
          }
        ]),
        HttpClientModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ CreateAccountComponent, SanitizeHtmlPipe ],
      providers: [
        SanitizeHtmlPipe,
        CookieService,
        AlertService,
        AuthenticationService,
        RouterTestingModule,
        AccountClientService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });

  it('should init', () => {
    app.ngOnInit();
    expect(app.registerForm).toEqual(jasmine.any(FormGroup));
  });

  it('should get controls', () => {
    app.ngOnInit();
    expect(app.f.name).toEqual(jasmine.any(FormControl));
    expect(app.f.surname).toEqual(jasmine.any(FormControl));
    expect(app.f.sex).toEqual(jasmine.any(FormControl));
    expect(app.f.email).toEqual(jasmine.any(FormControl));
    expect(app.f.password).toEqual(jasmine.any(FormControl));
    expect(app.f.confirmPassword).toEqual(jasmine.any(FormControl));
    expect(app.f.birthdateObj).toEqual(jasmine.any(FormControl));
  });

  it('should invalidate form', () => {
    app.ngOnInit();
    app.onSubmit();
    expect(app.f.name.hasError('required')).toEqual(true);
    expect(app.f.surname.hasError('required')).toEqual(true);
    expect(app.f.sex.hasError('required')).toEqual(true);
    expect(app.f.email.hasError('required')).toEqual(true);
    expect(app.f.password.hasError('required')).toEqual(true);
    expect(app.f.confirmPassword.hasError('required')).toEqual(true);
    expect(app.f.birthdateObj.hasError('required')).toEqual(true);
    app.f.password.setValue('Test');
    app.f.confirmPassword.setValue('Test2');
    app.f.email.setValue('Test');
    app.onSubmit();
    expect(app.f.password.hasError('confirm')).toEqual(true);
    expect(app.f.confirmPassword.hasError('confirm')).toEqual(true);
    expect(app.f.email.hasError('email')).toEqual(true);
  });

  it('should create new user', () => {
    const b = new BehaviorSubject([{id: 'test'}]);
    const obs = b.asObservable();
    const alertServiceSpy = spyOn(app.alertService, 'success');
    const routerSpy = spyOn(app.router, 'navigate');
    const accountClientServiceSpy = spyOn(app.accountClientService, 'register').and.returnValue(obs);
    app.ngOnInit();
    app.f.name.setValue('Test');
    app.f.surname.setValue('Test');
    app.f.sex.setValue('Test');
    app.f.email.setValue('Test@test.com');
    app.f.password.setValue('Test@1234');
    app.f.confirmPassword.setValue('Test@1234');
    app.f.birthdateObj.setValue(new Date());
    app.onSubmit();
    expect(routerSpy).toHaveBeenCalledWith(['/login']);
    expect(alertServiceSpy).toHaveBeenCalledWith('Usuario cadastrado com sucesso', true);
    expect(accountClientServiceSpy).toHaveBeenCalled();
  });

  it('should not create new user', () => {
    const alertServiceSpy = spyOn(app.alertService, 'error');
    const accountClientServiceSpy = spyOn(app.accountClientService, 'register').and.returnValue(throwError('test'));
    app.ngOnInit();
    app.f.name.setValue('Test');
    app.f.surname.setValue('Test');
    app.f.sex.setValue('Test');
    app.f.email.setValue('Test@test.com');
    app.f.password.setValue('Test@1234');
    app.f.confirmPassword.setValue('Test@1234');
    app.f.birthdateObj.setValue(new Date());
    app.onSubmit();
    expect(alertServiceSpy).toHaveBeenCalledWith('test');
    expect(accountClientServiceSpy).toHaveBeenCalled();
  });

  it('should go back to root', () => {
    const routerSpy = spyOn(app.router, 'navigate');
    app.goBack();
    expect(routerSpy).toHaveBeenCalledWith(['/']);
  });
});
