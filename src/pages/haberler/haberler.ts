import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HaberlerServis} from '../../providers/haberler-servis/haberler-servis';



@IonicPage()
@Component({
  selector: 'page-haberler',
  templateUrl: 'haberler.html',
})
export class HaberlerPage {

  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private haberlerservis: HaberlerServis) {
  }

  ionViewDidLoad(){
    this.haberlerservis.getData('top-headlines?country=tr&category=sports')
    .subscribe(data=>{
      console.log(data);
      this.data = data;
    })
  }

}
