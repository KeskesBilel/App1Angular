import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-directive',
  templateUrl: './example-directive.component.html',
  styleUrls: ['./example-directive.component.css']
})
export class ExampleDirectiveComponent implements OnInit {

  Tabinfo:string[]=['bilel','salim','hamdi','ali']
  constructor() { }

  ngOnInit() {
  }

}
