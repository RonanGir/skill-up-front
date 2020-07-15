import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { XhrInterceptor } from '../xhrInterceptor';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
      WelcomeComponent,
      LoginComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    ],
  })
  export class WelcomeModule { }
