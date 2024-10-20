import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeModule } from './feature/home/home.module';
import { HospedajeModule } from './feature/hospedaje-module/hospedaje.module';
import { authGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  //Ruta por defecto para cargar el modulo de home
  {
    path: '',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)  // Carga diferida de HomeModule
  },
  //Ruta temporal para cargar el modulo de hospedaje
  {
    path: 'hospedaje',
    loadChildren: () => import('./feature/hospedaje-module/hospedaje.module').then(m => m.HospedajeModule),
    canLoad: [authGuard]  // Protege la carga del módulo
  },
  
  //Ruta temporal para cargar el perfil del usuario
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./feature/usuario-module/usuario.module').then(m => m.UsuarioModule),
    canLoad: [authGuard]  // Protege la carga del módulo
  },

 

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',  // Restaura la posición del scroll al navegar
    anchorScrolling: 'enabled'  // Habilita el scroll suave a los anclajes
  }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
