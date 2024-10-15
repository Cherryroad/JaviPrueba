import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JddloginPage } from './jddlogin.page';

const routes: Routes = [
  {
    path: '',
    component: JddloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JddloginPageRoutingModule {}
