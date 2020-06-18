import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'hello', component: LoginComponent }
    ]),
    CommonModule
  ]
})
export class WelcomesModule { }
