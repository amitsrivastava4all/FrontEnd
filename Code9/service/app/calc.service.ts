import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

  constructor() { }

  add(x:number,y:number){
    return x + y;
  }

}
