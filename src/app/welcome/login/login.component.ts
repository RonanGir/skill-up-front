import { Component, OnInit } from '@angular/core';
import { Credential } from '../../model/credential';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private isLoggedIn;
  private loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private route: Router,
            ) {}

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    /**
     * Init the login form
     */
    this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });
  }

  /**
   * Prepare Data to identicate the user
   */
  onSubmit(): void {
    const credential = {
      email: this.loginForm.get('email').value,
      username: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    if (this.loginForm.valid) {
      this.auth.onLogin(credential);
    }
  }


  logout() {
    this.auth.onLogout();
  }



}
