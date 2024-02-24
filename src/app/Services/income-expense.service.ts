import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Model/Category';

@Injectable({
  providedIn: 'root'
})
export class IncomeExpenseService {

  private baseApiUrl = 'https://ecommarceshop.runasp.net/api/';
  private userId = JSON.parse(localStorage.getItem('user')).id;
  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseApiUrl + `Category/GetAllCategory/${this.userId}`);
  }
}
