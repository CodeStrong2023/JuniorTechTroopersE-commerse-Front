import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospedajeRoutingModule } from './hospedaje-routing.module';
import { HospedajeProvinciasComponent } from './components/hospedaje-provincias/hospedaje-provincias.component';
import { CoreModule } from '../../core-module/core.module';
import { DetalleHospedajeComponent } from './components/detalle-hospedaje/detalle-hospedaje.component';
import { HospedajeInfoComponent } from './hospedaje-info/hospedaje-info/hospedaje-info.component';
import { NuevoHospedajeComponent } from './components/nuevo-hospedaje/nuevo-hospedaje.component';


@NgModule({
  declarations: [
    HospedajeProvinciasComponent,
    DetalleHospedajeComponent,    
    HospedajeInfoComponent, NuevoHospedajeComponent
  ],
  imports: [
    CommonModule,
    HospedajeRoutingModule,
    CoreModule
  ]
})
export class HospedajeModule { }
