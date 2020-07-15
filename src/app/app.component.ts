import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { Dashboard } from './model/dashboard';
import { AuthService } from './service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  authSubscription: Subscription;
  isAuth: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.authenticated$.subscribe(
      (auth: boolean) => {
        console.log(auth);
        this.isAuth = auth;
      }
    );
  }

  onLogout() {
    this.auth.onLogout();
  }

}
