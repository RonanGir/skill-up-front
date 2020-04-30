import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { Dashboard } from './model/dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skill-up-front';
  apiUrl = environment.apiUrl;
  response = '';
  users: User[];
  dashboard: Dashboard;
  dashboards: Dashboard[];


  constructor(private http: HttpClient) {
  }

  onReset() {
    this.response = '';
    this.users = [];
  }

  onTestBack() {
    this.http.get(this.apiUrl + '/hello', {responseType: 'text'}).subscribe(
      (greeting: string) => {
        this.response = greeting;
      },
      (error) => {
        this.response = error.message;
      }
    );
  }

  onGetUsers() {
    this.http.get(this.apiUrl + '/users').subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
  }

  onGetUserBoard(user: User) {
    this.http.post(this.apiUrl + '/user/board', user).subscribe(
      (dashboard: Dashboard) => {
        this.dashboard = dashboard;

      }
    );
  }
}
