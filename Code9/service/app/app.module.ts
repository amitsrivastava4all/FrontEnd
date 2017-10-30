import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CalcService} from './calc.service';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [CalcService],  // U can add Here for Singleton Behave of service
  bootstrap: [AppComponent]
})
export class AppModule { }
