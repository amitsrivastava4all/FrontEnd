import { FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  blackListedUsers:string[] = ["tim","kim","rim","sim"];
  title = 'app';
  registerForm:FormGroup;
  message = "";
  ngOnInit(){
    this.registerForm = new FormGroup({
      'userinfo':this.getUserInfo(),
      'name':new FormControl(null,[Validators.required, Validators.email]),
      'address':new FormArray([])
    });
  }

  checkUsers(control:FormControl):{[key:string]:boolean}{
    if(this.blackListedUsers.indexOf(control.value)>=0){
      return {'blackListed':true};
    }
    return null;  // if validation is pass , return null
 }
  registerIt(){
    console.log("Form Data is ",this.registerForm);
  }

  addAddress(){
    const addressField = new FormControl(null,Validators.required);

    (<FormArray>this.registerForm.get('address')).push(addressField);
   }

  getUserInfo():FormGroup{
    var userInfo:FormGroup = new FormGroup({
      'userid':new FormControl(null,[Validators.required,this.checkUsers.bind(this)])
    });
    return userInfo;
  }
}
