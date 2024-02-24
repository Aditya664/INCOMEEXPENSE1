import { Component, Inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { LoaderService } from './Services/loader.service';
import { TuiNightThemeService } from '@taiga-ui/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './Services/authentication.service';


interface Item {
  badge?: number;
  icon: string;
  text: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'IncomeExpense';
  activeItemIndex = 4;
  currentTab = 'Records'
  isLoggedIn: boolean;
  readonly items = [
    {
      text: 'Records',
      icon: 'tuiIconList',
      route: '/records'
    },
    {
      text: 'Analysis',
      icon: 'tuiIconPieChart',
      route: '/analysis'
    },
    {
      text: 'Budgets',
      icon: 'tuiIconCalendar',
      route: '/budget'
    },
    {
      text: 'Accounts',
      icon: 'tuiIconTrello',
      route: '/account'
    },
    {
      text: 'Categories',
      icon: 'tuiIconServer',
      route: '/category'
    },
  ];

  logout():void{
    this.authService.logout()
  }

  constructor(public loaderService: LoaderService, private router: Router,private authService:AuthenticationService,
    @Inject(TuiNightThemeService) readonly night$: Observable<boolean>
    ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/register') {
          this.isLoggedIn = false;
        } else {
          // console.log("NU")
          this.isLoggedIn = true;
        }
      }
    });
  }


  onClick(item: Item): void {
    this.currentTab = item.text;
    this.router.navigateByUrl(item.route);
  }
}
