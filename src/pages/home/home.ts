import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuoteService } from "../../services/quote";
import { Generales } from "../generales/generales";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[QuoteService]
})
export class HomePage {
  public email="";
  constructor(public navCtrl: NavController, public quote:QuoteService) {
    this.quote.getQuotes();

  }

  ingresar(){
    console.log(this.quote.data.email);
    if(this.email===this.quote.data.email){
      this.navCtrl.push(Generales);
      console.log(this.quote.data);
    }
    else{
      console.log("email incorrecto");
    }
  }

}
