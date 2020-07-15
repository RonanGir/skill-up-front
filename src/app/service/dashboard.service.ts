import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../model/dashboard';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getDashboardUser(user: User): Observable<Dashboard> {
    return this.http.post<Dashboard>(this.apiUrl + '/user/board', user);
  }
}
