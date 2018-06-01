import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  comments =[
    {
      data :new Date(),message:"aaa" },
    {
      data :new Date(),message:"bbb" },
    {
      data :new Date(),message:"ccc" }
];

commentss =[
  {
    data :new Date(),message:"aaa" },
  {
    data :new Date(),message:"bbb" },
  {
    data :new Date(),message:"ccc" }
];
commentaire={ data:null,message:""};

onajouter(){
  this.commentaire.data = new Date() ; 
this.comments.push(this.commentaire);
this.commentaire={ data:null,message:""};
}

commentairee={ data:null,message:""};
onAjouter(c){
  c.data = new Date() ; 
this.commentss.push(c);
this.commentairee.message="";

}
 

constructor() { }

  ngOnInit() {
  }

}
