import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jddlogin',
    pathMatch: 'full'
  },
  {
    path: 'jddlogin',
    loadChildren: () => import('./jddlogin/jddlogin.module').then( m => m.JddloginPageModule)
  },
  {
    path: 'jddparticipantes',
    loadChildren: () => import('./jddparticipantes/jddparticipantes.module').then( m => m.JddparticipantesPageModule)
  },
  {
    path: 'wasa',
    loadChildren: () => import('./wasa/wasa.module').then( m => m.WasaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
