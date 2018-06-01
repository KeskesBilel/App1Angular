import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  chchang: string='     ';
  echange(){
  this.chchang = 'le phrase que affichier apres le click ';
}
  constructor() { }

  ngOnInit() {
  }

}
