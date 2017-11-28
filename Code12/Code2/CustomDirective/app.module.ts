import { AdvanceColorDirective } from './advance/advancecolor.directive';
import { ColorDirective } from './basic/color.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
   ColorDirective,AdvanceColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
