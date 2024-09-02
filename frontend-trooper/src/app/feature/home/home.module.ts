import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './componentes/banner/banner.component';
import { FiltroComponent } from './componentes/filtro/filtro.component';
import { TendenciasComponent } from './componentes/tendencias/tendencias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CoreModule } from '../../core-module/core.module';


@NgModule({
  declarations: [
    BannerComponent,
    FiltroComponent,
    TendenciasComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
