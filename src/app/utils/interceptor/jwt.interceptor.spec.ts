import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {JwtInterceptor} from './jwt.interceptor';
import {RandomizationClientService} from '../../providers';
import {environment} from '../../../environments/environment';
import {of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

describe(`JwtInterceptor`, () => {
  let service;
  let httpMock: HttpTestingController;
  let jwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CookieService,
        RandomizationClientService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true,
        }
      ],
    });

    service = TestBed.get(RandomizationClientService);
    jwtInterceptor = TestBed.get(HTTP_INTERCEPTORS);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should add an Authorization header', () => {
    spyOnProperty(jwtInterceptor[1].authenticationService, 'authToken').and.returnValue('Bearer token');
    service.getAllProjects('test').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${environment.baseUrl}${environment.projectsUrl}?ownerId=test`);

    // expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  });

  it('should not add an Authorization header', () => {
    service.getAllProjects('test').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${environment.baseUrl}${environment.projectsUrl}?ownerId=test`);
    //TODO: VERIFICAR
    // expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  });

});
