import { Component } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regForm =new FormGroup(
    {
      username:new FormControl("",Validators.required),
      email:new FormControl("@gmail.com",Validators.required),
      password:new FormControl("",Validators.required)
    }
  )

get username(){
  return this.regForm.get("username")
}
get email(){
  return this.regForm.get("email")
}
get password(){
  return this.regForm.get("password")
}

  signUp(){
    console.log(this.regForm.value);
    
  }

}
