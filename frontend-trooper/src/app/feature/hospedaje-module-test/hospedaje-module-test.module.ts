import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospedajeModuleTestRoutingModule } from './hospedaje-module-test-routing.module';
import { HospedajeProvinciaTestComponent } from './componentes/hospedaje-provincia-test/hospedaje-provincia-test.component';
import { HospedajeInfoComponent } from './componentes/hospedaje-info/hospedaje-info.component';
import { CoreModule } from '../../core-module/core.module';


@NgModule({
  declarations: [
    HospedajeProvinciaTestComponent,
    HospedajeInfoComponent
  ],
  imports: [
    CommonModule,
    HospedajeModuleTestRoutingModule,
    
  ]
})
export class HospedajeModuleTestModule { }
