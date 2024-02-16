import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { BmiComponent } from './bmi/bmi.component';
import { EmiComponent } from './emi/emi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { LengthComponent } from './length/length.component';

const routes: Routes = [
  {path:"addition",component:AdditionComponent},
  {path:"bmi",component:BmiComponent},
  {path:"emi",component:EmiComponent},
  {path:"temp",component:TemperatureComponent},
  {path:"length",component:LengthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
