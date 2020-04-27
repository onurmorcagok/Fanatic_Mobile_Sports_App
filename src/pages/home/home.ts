import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HaberlerPage } from '../haberler/haberler';
import { TakimlarPage } from '../takimlar/takimlar';
import { MacMerkeziPage } from '../mac-merkezi/mac-merkezi';
import { FiksturPage } from '../fikstur/fikstur';
import { PuanDurumuPage } from '../puan-durumu/puan-durumu';
import { SosyalMedyaPage } from '../sosyal-medya/sosyal-medya';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Network } from '@ionic-native/network';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stat;

  constructor(public navCtrl: NavController,private batteryStatus: BatteryStatus,private baglanti:Network) {
    this.getStatus();
    
    let baglantiYok=this.baglanti.onDisconnect().subscribe(()=>{
      alert("Bağlantı Başarısız");
    });

    let baglantiVar=this.baglanti.onConnect().subscribe(()=>{
      alert("Bağlantı Başarılı");
      setTimeout(()=>{
        if(this.baglanti.type==='wifi'){
          alert("Bağlantı WiFi ile Gerçekleşti");
        }
      },3000)
    });

  
  }

  getStatus(){
    this.batteryStatus.onChange().subscribe(status =>{
      this.stat=status;
    });
  }

  haberler(){
    this.navCtrl.push(HaberlerPage);
  }

  anasayfa(){
    this.navCtrl.push(HomePage);
  }
    takimlarPage(){
      this.navCtrl.push(TakimlarPage);
    }

    macMerkezi(){
      this.navCtrl.push(MacMerkeziPage);
    }

    fikstur(){
      this.navCtrl.push(FiksturPage);
    }

    puanDurumu(){
      this.navCtrl.push(PuanDurumuPage);
    }

    sosyalMedya(){
      this.navCtrl.push(SosyalMedyaPage);
    }
  
}
