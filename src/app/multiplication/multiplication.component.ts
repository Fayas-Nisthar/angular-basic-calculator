import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {
  result:number=0
  multiplication(b1:any,b2:any){
    let n1=+b1.value
    let n2=+b2.value
    this.result=n1*n2
  }
}
