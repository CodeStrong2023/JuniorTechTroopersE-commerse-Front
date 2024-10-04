import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospedajeRoutingModule } from './hospedaje-routing.module';
import { HospedajeProvinciasComponent } from './components/hospedaje-provincias/hospedaje-provincias.component';
import { CoreModule } from '../../core-module/core.module';
import { DetalleHospedajeComponent } from './components/detalle-hospedaje/detalle-hospedaje.component';
import { NuevoHospedajeComponent } from './components/nuevo-hospedaje/nuevo-hospedaje.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HospedajeProvinciasComponent,
    DetalleHospedajeComponent,
    CarritoComponent,       
  ],
  imports: [
    CommonModule,
    HospedajeRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class HospedajeModule { }
