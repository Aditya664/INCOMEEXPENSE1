import { Component, OnInit } from '@angular/core';
import { IncomeExpenseService } from '../Services/income-expense.service';
import { Category } from '../Model/Category';
import { XhrErrorHandlerService } from '../Services/xhr-error-handler.service';
import { LoaderService } from '../Services/loader.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = []
  accountImg = 'src/assets/account.svg'
  constructor(private loaderService: LoaderService, private incomeExpenseService: IncomeExpenseService, private errorService: XhrErrorHandlerService) { }
  ngOnInit(): void {
    this.loaderService.show()
    this.incomeExpenseService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.loaderService.hide()
      }, error: (error: Error) =>{
        this.loaderService.hide()
        this.errorService.handleError(error)
      }
    })
  }

  onDeleteCategory(category?:Category):void{
    
  } 
}
