import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './componentes/banner/banner.component';
import { TendenciasComponent } from './componentes/tendencias/tendencias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CoreModule } from '../../core-module/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './componentes/about/about.component';



@NgModule({
  declarations: [
    BannerComponent,    
    TendenciasComponent,
    InicioComponent,
    ContactoComponent,
    AboutComponent,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
})
export class HomeModule { }
