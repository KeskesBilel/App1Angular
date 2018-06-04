import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/ser.services';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  info : any ; 
  inf : any ; 
afficherChane(){
  return 'le fonction returne un channee de carecteur ';
}

ch1:string = 'le channee peut eter un URL d img   ';


comments =[
    {
      data :new Date(),message:"aaa"
    },
    {
      data :new Date(),message:"bbb"
 },
    {
      data :new Date(),message:"ccc"  }
]
  constructor(private aboutservice:AboutService) {

this.info = this.aboutservice.getInfo();
this.inf =this.aboutservice.getSomme(5,5);
   }

  ngOnInit() {
  }

}
