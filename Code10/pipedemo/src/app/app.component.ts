import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  salary:number=12.7654312121;
  text:string="this is text";
  name:string="Amit";
  currentDate=new Date();
  roi:number=10.20;
  object:Object = {id:1001,name:'Ram',salary:9000}
}
