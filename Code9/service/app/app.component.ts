import { Component ,OnInit} from '@angular/core';
import {AppService,Item} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]  // Provide Fresh Object for each component
})
export class AppComponent implements OnInit {
  title = 'app';
  items:Item[]=[];
  service:AppService;
  result:number
  constructor(service:AppService){
  this.service = service;  // Good Way by Using DI
  }

  ngOnInit(){
    //const service = new AppService();  // Bad Way
    this.items = this.service.getItems();
  this.result = this.service.getComputeResult();
  }
}
