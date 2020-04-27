import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-takimlar',
  templateUrl: 'takimlar.html',
})
export class TakimlarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sayfaDegistir(takim){
    this.navCtrl.push("TakimlarPage",{takimAdi:takim});
  }

  

}
