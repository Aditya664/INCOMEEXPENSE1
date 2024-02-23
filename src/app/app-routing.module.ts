import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: RegisterComponentComponent,
  },
  {
    path: 'register',
    component: RegisterComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
