import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Credential } from '../model/credential';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticated = new Subject<boolean>();
  public authenticated$ = this.authenticated.asObservable();
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient,
              private route: Router,
              private cookie: CookieService,
              private storage: StorageService
    ) { }

  onLogin(crediential: Credential): void {
    this.http.post(this.baseUrl + '/login', crediential).subscribe(
      (user: User) => {
        this.storage.store('currentUser', user);
        this.storage.store('token', btoa(crediential.email + ':' + crediential.password));
        this.setIsAuth(true);
        this.route.navigateByUrl('/home');
      },
      (error) => {
        //TODO: Generate an error and delete console.log
        console.log('not connected');
      }
    );
  }

  onLogout() {
    this.http.post(this.baseUrl + '/logout', {});
    this.storage.unstore();
    this.setIsAuth(false);
    this.cookie.delete('access_token');
    window.location.reload();
  }

  setIsAuth(isAuth: boolean) {
    this.authenticated.next(isAuth);
  }

}
