import { Component } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {

  result:number=0
  division(box1:any,box2:any){
    let num1=+box1.value
    let num2=+box2.value
    this.result=num1/num2
  }
}
