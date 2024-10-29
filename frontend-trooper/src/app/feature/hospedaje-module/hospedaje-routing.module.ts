import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospedajeProvinciasComponent } from './components/hospedaje-provincias/hospedaje-provincias.component';
import { DetalleHospedajeComponent } from './components/detalle-hospedaje/detalle-hospedaje.component';
import { NuevoHospedajeComponent } from './components/nuevo-hospedaje/nuevo-hospedaje.component';
import { DetalleTendenciaComponent } from './components/detalle-tendencia/detalle-tendencia.component';


const routes: Routes = [
  {path:'', component: HospedajeProvinciasComponent},
  {path:'detalle-hospedaje/:hospedajeToken', component: DetalleHospedajeComponent},
  {path: 'nuevo', component: NuevoHospedajeComponent},
  {path:'detalle-tendencia/:hospedajeToken', component: DetalleTendenciaComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospedajeRoutingModule { }
