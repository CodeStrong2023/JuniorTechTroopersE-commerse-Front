import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospedajeProvinciasComponent } from './components/hospedaje-provincias/hospedaje-provincias.component';
import { DetalleHospedajeComponent } from './components/detalle-hospedaje/detalle-hospedaje.component';
import { NuevoHospedajeComponent } from './components/nuevo-hospedaje/nuevo-hospedaje.component';


const routes: Routes = [
  {path:'', component: HospedajeProvinciasComponent},
  {path:'info', component: DetalleHospedajeComponent},
  {path: 'nuevo', component: NuevoHospedajeComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospedajeRoutingModule { }
