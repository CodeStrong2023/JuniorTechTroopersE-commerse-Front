import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospedajeRoutingModule } from './hospedaje-routing.module';
import { HospedajeProvinciasComponent } from './components/hospedaje-provincias/hospedaje-provincias.component';
import { CoreModule } from '../../core-module/core.module';
import { DetalleHospedajeComponent } from './components/detalle-hospedaje/detalle-hospedaje.component';
import { HospedajeTestComponent } from './components/hospedaje-test/hospedaje-test.component';


@NgModule({
  declarations: [
    HospedajeProvinciasComponent,
    DetalleHospedajeComponent,
    HospedajeTestComponent
  ],
  imports: [
    CommonModule,
    HospedajeRoutingModule,
    CoreModule
  ]
})
export class HospedajeModule { }
