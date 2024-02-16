import { Component } from '@angular/core';
import {FormControl,FormGroup,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  emi:number=0
  payable:number=0
  totalInterest:number=0

  emiForm= new FormGroup({
    amount:new FormControl("",Validators.required),
    interest:new FormControl("",Validators.required),
    tenure:new FormControl("",Validators.required)
  })

  get amount(){
    return this.emiForm.get("amount")
  }
  get interest(){
    return this.emiForm.get("interest")
  }
  get tenure(){
    return this.emiForm.get("tenure")
  }


  calculateEmi(){
    let p=Number(this.amount?.value)
    let r=Number(this.interest?.value)/12
    let i=r/100
    let n=Number(this.tenure?.value)*12
    let oneplusi=(1+i)**n
    this.emi=Math.round((p*i*oneplusi)/(oneplusi-1))   
    this.payable=this.emi*n
    this.totalInterest=this.payable-p

    
  }
}
