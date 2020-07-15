import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { XhrInterceptor } from './xhrInterceptor';
import { AuthService } from './service/auth.service';
import { StorageService } from './service/storage.service';
import { CookieService } from 'ngx-cookie-service';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    WelcomeModule,
    ReactiveFormsModule,
  ],
  providers: [
    StorageService,
    CookieService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
