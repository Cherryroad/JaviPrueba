import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JddparticipantesPage } from './jddparticipantes.page';

const routes: Routes = [
  {
    path: '',
    component: JddparticipantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JddparticipantesPageRoutingModule {}
