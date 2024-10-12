import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FiltroComponent } from './componentes/filtro/filtro.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FiltroComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
        
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FiltroComponent
  ]
})
export class CoreModule { }
