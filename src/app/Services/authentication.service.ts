import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from 'src/app/Services/authentication.client';
import { User } from '../Model/User';
import { XhrErrorHandlerService } from './xhr-error-handler.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'user';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router,
    private xhrErrorService: XhrErrorHandlerService,
    private loaderService: LoaderService
  ) { }

  public login(username: string, password: string): void {
    this.loaderService.show();
    this.authenticationClient.login(username, password).subscribe({
      next: (token) => {
        localStorage.setItem(this.tokenKey, JSON.stringify(token));
        this.loaderService.hide();
        this.router.navigate(['/']);
      }, error: (error: Error) => {
        this.xhrErrorService.handleError(error);
        this.loaderService.hide();
      }
    });
  }

  public register(user: User): void {
    this.loaderService.show();
    this.authenticationClient
      .register(user)
      .subscribe({
        next: (token) => {
          localStorage.setItem(this.tokenKey, JSON.stringify(token));
          this.loaderService.hide();
          this.router.navigate(['/']);
        }, error: (error: Error) => {
          this.xhrErrorService.handleError(error);
          this.loaderService.hide();
        }
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