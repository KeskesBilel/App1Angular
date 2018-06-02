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
}
