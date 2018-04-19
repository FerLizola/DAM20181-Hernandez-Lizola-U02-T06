import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuoteService } from "../../services/quote";

@Component({
  selector: 'deportes',
  templateUrl: 'deportes.html',
  providers:[QuoteService]
})
export class Deportes {

  public sports:any;

  constructor(public navCtrl: NavController,public  quote:QuoteService) {
    this.quote.getQuotes();
  }

  ionViewDidEnter(){
    this.sports=this.quote.data.sports;
  }

}
