import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HaberlerPage } from './haberler';

@NgModule({
  declarations: [
    HaberlerPage,
  ],
  imports: [
    IonicPageModule.forChild(HaberlerPage),
  ],
})
export class HaberlerPageModule {}
