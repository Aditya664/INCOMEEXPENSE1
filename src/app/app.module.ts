import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiModeModule, TuiRootModule, TuiThemeNightModule } from '@taiga-ui/core';
import {TuiTabBarModule} from '@taiga-ui/addon-mobile';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    TuiRootModule,
    TuiTabBarModule,
    TuiThemeNightModule,
    TuiModeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
