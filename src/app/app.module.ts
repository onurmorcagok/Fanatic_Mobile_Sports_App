import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HaberlerPage } from '../pages/haberler/haberler';
import { TakimlarPage } from '../pages/takimlar/takimlar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MacMerkeziPage } from '../pages/mac-merkezi/mac-merkezi';
import { FiksturPage } from '../pages/fikstur/fikstur';
import { PuanDurumuPage } from '../pages/puan-durumu/puan-durumu';
import { SosyalMedyaPage } from '../pages/sosyal-medya/sosyal-medya';
import { HaberlerServis } from '../providers/haberler-servis/haberler-servis';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Network } from '@ionic-native/network';
import { IonicImageViewerModule } from 'ionic-img-viewer';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HaberlerPage,
    TakimlarPage,
    MacMerkeziPage,
    FiksturPage,
    PuanDurumuPage,
    SosyalMedyaPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicImageViewerModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HaberlerPage,
    TakimlarPage,
    MacMerkeziPage,
    FiksturPage,
    PuanDurumuPage,
    SosyalMedyaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HaberlerServis,
    BatteryStatus,
    Network
  ]
})
export class AppModule {}
