import { Component } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent {
  cm:number=0
  m:number=0
  toMeter(){
    this.m=this.cm/100
  }
  toCm(){
    this.cm=this.m*100
  }

}
