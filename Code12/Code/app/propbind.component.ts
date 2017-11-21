import {Input,Component,Output,EventEmitter} from '@angular/core';
@Component({
  selector:'propbind',
 templateUrl:'propbind.component.html',
 styleUrls:['./propbindcomponent.css']
})
export class PropBindExample{
  @Input() name:string;
  @Input('jobalias') job:string;
  @Output() passcitytoparent = new EventEmitter<string>();  // String says type of data u want to pass during emit to parent
  city:string="";
  takeCity(event){
    this.city = event.target.value;
    this.passcitytoparent.emit(this.city);
  }


}
