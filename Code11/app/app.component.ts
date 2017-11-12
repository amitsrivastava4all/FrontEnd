import { Component } from '@angular/core';
import {ChildComp} from './child.component';
import {ViewChild,ViewChildren,QueryList} from '@angular/core';
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
  @ViewChild(ChildComp)
  childCompObject:ChildComp;
  @ViewChildren(ChildComp)
  childList:QueryList<ChildComp>;
  updateChild(){
    this.childList.forEach((child)=>child.message = "Hello "+child.myprop);
console.log("Childs are ",this.childList.length);
  //this.childCompObject.message  = "Hello this message is send by parent";
  }
}
