import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiAlertModule, TuiAlertService, TuiButtonModule, TuiDialogModule, TuiModeModule, TuiRootModule, TuiThemeNightModule } from '@taiga-ui/core';
import { TuiTabBarModule } from '@taiga-ui/addon-mobile';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiCheckboxLabeledModule, TuiInputModule, TuiInputPasswordModule, TuiInputPhoneModule, TuiIslandModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { TuiSurfaceModule } from '@taiga-ui/experimental';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationClient } from './Services/authentication.client';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TuiLoaderModule } from '@taiga-ui/core';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    AccountComponent,
    CategoryComponent,
    BudgetComponent
  ],
  imports: [
    BrowserAnimationsModule, 
    BrowserModule,
    AppRoutingModule,
    TuiLoaderModule,
    TuiRootModule,
    TuiTabBarModule,
    MatSnackBarModule,
    NoopAnimationsModule,
    TuiThemeNightModule,
    TuiModeModule,TuiDialogModule,
    CommonModule, ReactiveFormsModule, TuiInputModule,TuiIslandModule,TuiInputPhoneModule,TuiAlertModule,
    TuiInputPasswordModule, TuiButtonModule, TuiCheckboxLabeledModule,RouterModule, TuiSurfaceModule, HttpClientModule
  ],
  providers: [AuthenticationClient,AuthenticationService,AuthGuard,TuiAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
