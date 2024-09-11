import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospedajeModule } from './hospedaje.module';
import { HospedajeProvinciasComponent } from './components/hospedaje-provincias/hospedaje-provincias.component';

const routes: Routes = [
  {path:'', component: HospedajeProvinciasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospedajeRoutingModule { }
