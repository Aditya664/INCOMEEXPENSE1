import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  private baseApiUrl = 'https://ecommarceshop.runasp.net/api/';
  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get<any>(this.baseApiUrl + 'User/LoginUser', { params: params });
  }

  public register(user: User): Observable<any> {
    return this.http.post<User>(this.baseApiUrl + 'User/CreateNewUser', user, {  }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
}