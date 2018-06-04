import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AboutService } from './services/ser.services';
import { ExampleDirectiveComponent } from './example-directive/example-directive.component';
const r:Routes=[
  {path:'component1' , component: Component1Component },
  {path:'component2' , component: Component2Component },
  {path:'component3' , component: Component3Component },
  {path:'component4' , component: ExampleDirectiveComponent },
  {path:'' , redirectTo:'/component1' ,
   pathMatch: 'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    ExampleDirectiveComponent
  ],
  imports: [
    BrowserModule,
     MatButtonModule,
      MatCheckboxModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
    RouterModule.forRoot(r),
    FormsModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }


