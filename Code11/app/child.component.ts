import {Component,Input,ViewEncapsulation} from '@angular/core';
@Component({
  selector:'child-comp',
  templateUrl:'child.component.html',
  styleUrls:['./child.component.css'],
  encapsulation:ViewEncapsulation.Emulated

})
export class ChildComp{
  @Input()
  myprop:string;
  message:string ="";



}
