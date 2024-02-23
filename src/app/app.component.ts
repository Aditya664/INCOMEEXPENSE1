import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {TuiAlertService} from '@taiga-ui/core';



interface Item {
  badge?: number;
  icon: string;
  text: string;
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
      },
      {
          text: 'Analysis',
          icon: 'tuiIconPieChart',
          badge: 1234,
      },
      {
          text: 'Budgets',
          icon: 'tuiIconCalendar',
          badge: 1234,
      },
      {
          text: 'Accounts',
          icon: 'tuiIconTrello',
          badge: 100,
      },
      {
          text: 'Categories',
          icon: 'tuiIconServer',
          badge: 100,
      },
  ];

  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService,private router: Router) {
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
      item.badge = 0;
      this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();
  }
}
