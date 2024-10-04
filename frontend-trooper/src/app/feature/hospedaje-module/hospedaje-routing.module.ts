import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospedajeProvinciasComponent } from './components/hospedaje-provincias/hospedaje-provincias.component';
import { DetalleHospedajeComponent } from './components/detalle-hospedaje/detalle-hospedaje.component';


const routes: Routes = [
  {path:'', component: HospedajeProvinciasComponent},
  {path:'info', component: DetalleHospedajeComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospedajeRoutingModule { }
