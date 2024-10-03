import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospedajeRoutingModule } from './hospedaje-routing.module';
import { HospedajeProvinciasComponent } from './components/hospedaje-provincias/hospedaje-provincias.component';
import { CoreModule } from '../../core-module/core.module';
import { DetalleHospedajeComponent } from './components/detalle-hospedaje/detalle-hospedaje.component';


@NgModule({
  declarations: [
    HospedajeProvinciasComponent,
    DetalleHospedajeComponent
  ],
  imports: [
    CommonModule,
    HospedajeRoutingModule,
    CoreModule
  ]
})
export class HospedajeModule { }
