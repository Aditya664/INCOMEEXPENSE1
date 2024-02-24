import { Component, OnInit } from '@angular/core';
import { IncomeExpenseService } from '../Services/income-expense.service';
import { Category } from '../Model/Category';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  categories:Category[] = []
  constructor(private incomeExpenseService:IncomeExpenseService){}

  ngOnInit(): void {
   
  }

}
