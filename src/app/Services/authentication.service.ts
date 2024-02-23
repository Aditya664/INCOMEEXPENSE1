import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from 'src/app/Services/authentication.client';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'user';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

  public login(username: string, password: string): void {
    this.authenticationClient.login(username, password).subscribe((token) => {
      localStorage.setItem(this.tokenKey, JSON.stringify(token));
      this.router.navigate(['/']);
    });
  }

  public register(user:User): void {
    this.authenticationClient
      .register(user)
      .subscribe((token) => {
        localStorage.setItem(this.tokenKey, JSON.stringify(token));
        this.router.navigate(['/']);
      });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}