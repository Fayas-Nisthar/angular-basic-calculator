import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent { 
  c:number=0
  f:number=32
  ToFahrenheit(){
    this.f=(this.c*9/5)+32
  }

  Tocelsius(){
    this.c=(5/9*(this.f-32))
  }

}
