import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './componentes/banner/banner.component';
import { TendenciasComponent } from './componentes/tendencias/tendencias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CoreModule } from '../../core-module/core.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BannerComponent,    
    TendenciasComponent,
    InicioComponent,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    HttpClientModule
  ],
 
})
export class HomeModule { }
