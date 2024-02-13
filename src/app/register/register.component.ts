import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regForm =new FormGroup(
    {
      username:new FormControl(),
      email:new FormControl(),
      password:new FormControl()
    }
  )
  signUp(){
    console.log(this.regForm.value);
    
  }

}
