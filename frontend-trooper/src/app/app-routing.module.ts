import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './feature/home/home.module';
import { HospedajeModule } from './feature/hospedaje-module/hospedaje.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)  // Carga diferida de HomeModule
  },
  {
    path: 'hospedaje',
    loadChildren: () => import('./feature/hospedaje-module/hospedaje.module').then(m => m.HospedajeModule)  // Carga diferida de hospedaje TEMPORAL
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
