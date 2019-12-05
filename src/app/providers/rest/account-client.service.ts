import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from '../../model';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AccountClientService {
  baseUrl: String;
  constructor(private http: HttpClient, private cookieService: CookieService) {
    if (this.cookieService.get(environment.API_URL)) {
      this.baseUrl = this.cookieService.get(environment.API_URL) + '/api';
    } else {
      this.baseUrl = environment.baseUrl;
    }
  }

  public login(email: string, password: string, setCurrentUser: CallableFunction): Observable<any> {
    setCurrentUser({user:{_id: 'teste', name: 'Adriano'}});
    const b = new BehaviorSubject([{name: 'Adriano'}]);
    const obs = b.asObservable();
    return obs;
    // return this.http.post<any>(`${this.baseUrl}${environment.loginUrl}`, { email, password })
    //   .pipe(map(result => {
    //     setCurrentUser(result.data);
    //     return result.data;
    //   }));
  }

  public logout(clearLocalStorage) {
    return this.http.delete<any>(`${this.baseUrl}${environment.logoutUrl}`).subscribe(() => clearLocalStorage());
  }
}
