import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {AlertService} from './alert.service';
import {DashboardComponent} from '../components';
import {Observable, of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

describe('AlertService', () => {
  let service;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ DashboardComponent ],
    imports: [
      RouterTestingModule.withRoutes([
        {
          path: 'dashboard/projects',
          component: DashboardComponent,
        }
      ]),
      HttpClientModule
    ],
    providers: [CookieService]
  }).compileComponents());

  beforeEach(() => {
    service = TestBed.get(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.getAlert).toBeDefined();
    expect(service.clear).toBeDefined();
    expect(service.error).toBeDefined();
    expect(service.success).toBeDefined();
  });

  it('should change keepAfterRouteChange after Navigate', <any>fakeAsync (() => {
    spyOn(service, 'getAlert').and.returnValue(of({type: true}));
    service.keepAfterRouteChange = true;
    TestBed.createComponent(DashboardComponent);
    expect(service.keepAfterRouteChange).toBe(false);
  }));

  it('should clear after Navigate', <any>fakeAsync (() => {
    const clearSpy = spyOn(service, 'clear');
    TestBed.createComponent(DashboardComponent);
    expect(clearSpy).toHaveBeenCalledTimes(1);
  }));

  it('should get alert Observable after Navigate', <any>fakeAsync (() => {
    expect(service.getAlert()).toEqual(jasmine.any(Observable));
  }));

  it('should trigger success alert', <any>fakeAsync (() => {
    spyOn(service, 'getAlert').and.returnValue(of({type: 'success', text: 'test success'}));

    service.getAlert()
      .subscribe(message => {
        expect(message.type).toEqual('success');
        expect(message.text).toEqual('test success');
      });
    service.success('test success');
  }));

  it('should trigger error alert', <any>fakeAsync (() => {
    spyOn(service, 'getAlert').and.returnValue(of({type: 'error', text: 'test error'}));
    service.error('test error');
    service.getAlert()
      .subscribe(message => {
        expect(message.type).toEqual('error');
        expect(message.text).toEqual('test error');
      });
  }));

  it('should clear subject', <any>fakeAsync (() => {
    let subscription = service.getAlert()
      .subscribe(message => {
        expect(message.type).toEqual('error');
        expect(message.text).toEqual('test error');
      });
    service.error('test error');
    subscription.unsubscribe();
    service.getAlert()
      .subscribe(message => {
        expect(message).toEqual(undefined);
      });
    service.clear();
    tick(15000);
  }));
});
