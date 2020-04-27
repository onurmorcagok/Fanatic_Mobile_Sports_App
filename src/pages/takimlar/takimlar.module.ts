import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TakimlarPage } from './takimlar';

@NgModule({
  declarations: [
    TakimlarPage,
  ],
  imports: [
    IonicPageModule.forChild(TakimlarPage),
  ],
})
export class TakimlarPageModule {}
