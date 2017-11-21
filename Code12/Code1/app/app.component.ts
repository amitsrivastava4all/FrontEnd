import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  formSubmit(form){
    if(form.isInvalid){
      console.log("Invalid form ");
      return;
    }
    console.log("Form Submit.... ",form);
  }
}
