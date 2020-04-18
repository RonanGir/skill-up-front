import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'skill-up-front';
  apiUrl = environment.apiUrl;
  response: String = '';

  constructor(private http: HttpClient) {
    
  }

  onReset() {
    this.response = '';
  }
  
  onTestBack() {
    this.http.get(this.apiUrl + '/hello', {responseType: 'text'}).subscribe(
      (greeting: String) => {
        this.response = greeting;
      },
      (error) => {
        this.response = error.message;
      }
    )
  }
}