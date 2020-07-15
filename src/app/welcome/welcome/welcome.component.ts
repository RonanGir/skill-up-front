import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './welcome.component.html',
})

export class WelcomeComponent implements OnInit {
  pageTitle = 'Welcome';
  apiUrl = environment.apiUrl;
  response = '';

  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
  }

  onConnect(){
    this.http.get(this.apiUrl + '/hello', {responseType: 'text'}).subscribe(
      (greeting: string) => {
        this.response = greeting;
      },
      (error)=> {
        this.response = error.message;
      }
    );
  }

}