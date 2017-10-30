import {Component,OnInit} from '@angular/core';
import {ItemModel} from './ItemModel';
@Component({
selector:'item-list',
templateUrl:'item.component.html',
styleUrls:['item.component.css']
})
export class ItemComponent implements OnInit {
itemList= new Array<ItemModel>();
showme:boolean = true;
day:number=2;
ngOnInit(){
  this.prepareItems();
}
private prepareItems():void{
for(let i = 1; i<=10; i++){
  let itemObject = new ItemModel(i,"Apple"+i,1000+i*2,"This is sample Desc","xyz.png");
  this.itemList.push(itemObject);
}
}
}
