import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomPipe} from './custom.pipe';
import {ChildComp} from './child.component';
@NgModule({
  declarations: [
    AppComponent,CustomPipe,ChildComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
