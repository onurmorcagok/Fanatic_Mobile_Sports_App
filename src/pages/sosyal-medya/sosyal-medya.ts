import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-sosyal-medya',
  templateUrl: 'sosyal-medya.html',
})
export class SosyalMedyaPage {

  images=['1.jpg','2.jpg','3.jpg','4.jpg'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SosyalMedyaPage');
  }

}
