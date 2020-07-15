import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { IsSignedInGuard } from './service/is-signed-in.guard';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { LoginComponent } from './welcome/login/login.component';

const routes: Routes = [
  { path: 'home', canActivate: [IsSignedInGuard], component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'welcome', component: WelcomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
