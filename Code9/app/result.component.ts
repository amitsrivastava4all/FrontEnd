import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
    selector :'result-comp',
    templateUrl:'result.component.html'
})
export class ResultComponent{
  @Input()
  message:string="";
  @Input()
  calcresult:number=0;
  @Input()
  fnumber:number=0;




  @Output()
  parentmethod = new EventEmitter<number>();



  doMultiply():void{
    this.parentmethod.emit(3);  // Call parent Multiply method
  }

}
