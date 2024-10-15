import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JddloginPageRoutingModule } from './jddlogin-routing.module';

import { JddloginPage } from './jddlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JddloginPageRoutingModule
  ],
  declarations: [JddloginPage]
})
export class JddloginPageModule {}
