import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:string = "";
  name:string="";
  title = 'My First App';
  mystyle:string="red";
  message:string="Hello Angular 2";
  show():void{
    this.title = "U Click on Show";
    console.log("CLick to show..");
  }
  takeInput(event):void{
    var result = event.target.value;
    this.data = result;
  }
}
