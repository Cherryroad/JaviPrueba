import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WasaPage } from './wasa.page';

const routes: Routes = [
  {
    path: '',
    component: WasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WasaPageRoutingModule {}
