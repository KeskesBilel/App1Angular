import { Injectable } from "@angular/core";


@Injectable()


export class AboutService{

    info = {
        nom: "bilel",
        email:"bilelkeskes1@gmail.com",
        tel : "50589905"
      
    } 
    getInfo(){
        return this.info ; 
    }
    s: any ; 
    getSomme(a : any  ,b : any ){
this.s=a+b;
        return  ("somme est : " +this.s+"de "+a+ "+"+b);
    }
}
