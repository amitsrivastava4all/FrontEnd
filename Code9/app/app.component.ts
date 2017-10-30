import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message2:string="Calc Example....";
  data:string = "";
  name:string="";
  title = 'My First App';
  mystyle:string="red";
  message:string="Hello Angular 2";
  firstNumber:number=0;
  secondNumber:number=0;
  result:number=0;
  show():void{
    this.title = "U Click on Show";
    console.log("CLick to show..");
  }
  takeInput(event):void{
    var result = event.target.value;
    this.data = result;
  }

  takeFirstNo(event):void{
      this.firstNumber = parseInt(event.target.value);
  }

  takeSecondNo(event):void{
    this.secondNumber = parseInt(event.target.value);
  }

  add():void{
    this.result = this.firstNumber + this.secondNumber;
  }
  subtract():void{
    this.result = this.firstNumber - this.secondNumber;
  }
  multiply(x:number):void{
    this.firstNumber = this.firstNumber * x;
  }
}
