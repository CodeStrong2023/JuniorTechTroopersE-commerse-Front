import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { CoreModule } from '../../core-module/core.module';
import { DetalleTicketComponent } from './componentes/detalle-ticket/detalle-ticket.component';


@NgModule({
  declarations: [
    PerfilUsuarioComponent,
    DetalleTicketComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CoreModule
  ]
})
export class UsuarioModule { }
