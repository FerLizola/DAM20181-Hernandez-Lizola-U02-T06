import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuoteService } from "../../services/quote";
import { Deportes } from "../deportes/deportes";

@Component({
  selector: 'generales',
  templateUrl: 'generales.html',
  providers:[QuoteService]
})
export class Generales {
  public name:any;
  public email:any;
  public quote;
  
  constructor(public navCtrl: NavController,quote:QuoteService) {
    this.quote=quote;
    this.quote.getQuotes();
    console.log(this.quote.data);
    //this.nombre=this.quote.data.name;
    //this.email=this.quote.data.email;
    
  }

  ionViewDidEnter(){
    console.log(this.quote.data);
    this.name=this.quote.data.name;
    this.email=this.quote.data.email;
  }

  deportes(){
    this.navCtrl.push(Deportes);
  }
  

}
