import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WasaPageRoutingModule } from './wasa-routing.module';

import { WasaPage } from './wasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WasaPageRoutingModule
  ],
  declarations: [WasaPage]
})
export class WasaPageModule {}
