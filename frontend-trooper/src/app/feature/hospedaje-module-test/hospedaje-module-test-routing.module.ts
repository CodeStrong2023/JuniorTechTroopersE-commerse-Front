import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospedajeInfoComponent } from './componentes/hospedaje-info/hospedaje-info.component';
import { HospedajeProvinciaTestComponent } from './componentes/hospedaje-provincia-test/hospedaje-provincia-test.component';

const routes: Routes = [
  {
    path:'', component: HospedajeProvinciaTestComponent
  },
  {
    path:'info-test', component: HospedajeInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospedajeModuleTestRoutingModule { }
