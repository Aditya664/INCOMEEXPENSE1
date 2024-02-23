import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButtonModule, TuiModeModule, TuiRootModule, TuiThemeNightModule } from '@taiga-ui/core';
import {TuiTabBarModule} from '@taiga-ui/addon-mobile';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiCheckboxLabeledModule, TuiInputModule, TuiInputPasswordModule, TuiIslandModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import {TuiSurfaceModule} from '@taiga-ui/experimental';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationClient } from './Services/authentication.client';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthGuard } from './helpers/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    TuiRootModule,
    TuiTabBarModule,
    TuiThemeNightModule,
    TuiModeModule,
    CommonModule, ReactiveFormsModule, TuiInputModule,TuiIslandModule,
    TuiInputPasswordModule, TuiButtonModule, TuiCheckboxLabeledModule,RouterModule, TuiSurfaceModule, HttpClientModule
  ],
  providers: [AuthenticationClient,AuthenticationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
