import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
afficherChane(){
  return 'le fonction returne un channee de carecteur ';
}

ch1:string = 'le channee peut eter un URL d img   ';
  info = {
    nom: "bilel",
    email:"bilelkeskes1@gmail.com",
    tel : "02568"
  
} 
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
  constructor() { }

  ngOnInit() {
  }

}
