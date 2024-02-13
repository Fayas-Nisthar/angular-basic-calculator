import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { CubeComponent } from './cube/cube.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { LengthComponent } from './length/length.component';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    CubeComponent,
    MultiplicationComponent,
    DivisionComponent,
    BmiComponent,
    TemperatureComponent,
    LengthComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
