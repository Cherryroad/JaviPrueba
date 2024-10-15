import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JddparticipantesPageRoutingModule } from './jddparticipantes-routing.module';

import { JddparticipantesPage } from './jddparticipantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JddparticipantesPageRoutingModule
  ],
  declarations: [JddparticipantesPage]
})
export class JddparticipantesPageModule {}
