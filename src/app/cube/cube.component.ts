import { Component } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent {
  result:number=1
  cube(b1:any){
    let num=+b1.value
    this.result=num**3
  }

}
