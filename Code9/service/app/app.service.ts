import {Injectable} from '@angular/core';
import {CalcService} from './calc.service';
@Injectable() // now u can inject service with in service
export class AppService{
  private items:Item[]=[];
  private calcService : CalcService;
  constructor(calcService:CalcService){
    this.calcService = calcService;
  }
  private  prepare(){
    for(let i = 1; i<=10; i++){
      this.items.push(new Item("Samsung A"+i,9000+i));
    }
  }

  public getComputeResult(){
    return this.calcService.add(100,200);
  }

  public getItems(){
    this.prepare();
    return this.items;
  }

}

export class Item {
  constructor(public name:string, public price:number){

  }
}
