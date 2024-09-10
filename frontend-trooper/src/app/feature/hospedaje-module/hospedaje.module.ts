import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospedajeRoutingModule } from './hospedaje-routing.module';
import { HospedajeProvinciasComponent } from './components/hospedaje-provincias/hospedaje-provincias.component';


@NgModule({
  declarations: [
    HospedajeProvinciasComponent
  ],
  imports: [
    CommonModule,
    HospedajeRoutingModule
  ]
})
export class HospedajeModule { }
