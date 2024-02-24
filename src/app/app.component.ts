import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {TuiAlertService, TuiDialogService} from '@taiga-ui/core';

import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LoaderService } from './Services/loader.service';


interface Item {
  badge?: number;
  icon: string;
  text: string;
  route:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'IncomeExpense';
  activeItemIndex = 1;
    isLoggedIn:boolean;
  readonly items = [
      {
          text: 'Records',
          icon: 'tuiIconList',
          badge: 3,
          route:'/records'
      },
      {
          text: 'Analysis',
          icon: 'tuiIconPieChart',
          badge: 1234,
          route:'/analysis'
      },
      {
          text: 'Budgets',
          icon: 'tuiIconCalendar',
          badge: 1234,
          route:'/budget'
      },
      {
          text: 'Accounts',
          icon: 'tuiIconTrello',
          badge: 100,
          route:'/account'
      },
      {
          text: 'Categories',
          icon: 'tuiIconServer',
          badge: 100,
          route:'/category'
      },
  ];

  constructor(public loaderService: LoaderService,private router: Router) {
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
    this.router.navigateByUrl(item.route);
  }
}
