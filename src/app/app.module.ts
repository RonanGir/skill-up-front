import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module' => is not necessary since RouterModule from @angular/core does it;
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule, => is not necessary since RouterModule from @angular/core does it
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      //TODO: create a 404 error page
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
