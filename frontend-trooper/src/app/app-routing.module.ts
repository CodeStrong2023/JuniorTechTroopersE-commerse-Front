import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeModule } from './feature/home/home.module';
import { HospedajeModule } from './feature/hospedaje-module/hospedaje.module';
import { HospedajeModuleTestModule } from './feature/hospedaje-module-test/hospedaje-module-test.module';

const routes: Routes = [
  //Ruta por defecto para cargar el modulo de home
  {
    path: '',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)  // Carga diferida de HomeModule
  },
  //Ruta temporal para cargar el modulo de hospedaje
  {
    path: 'hospedaje',
    loadChildren: () => import('./feature/hospedaje-module/hospedaje.module').then(m => m.HospedajeModule)  // Carga diferida de hospedaje TEMPORAL
  },
  //Ruta temporal para cargar el perfil del usuario
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./feature/usuario-module/usuario.module').then(m => m.UsuarioModule)  // Carga diferida de usuario TEMPORAL
  },

  //Ruta temporal para cargar el modulo de info de hospedaje-test
  {
    path: 'info',
    loadChildren: () => import('./feature/hospedaje-module-test/hospedaje-module-test.module').then(m => m.HospedajeModuleTestModule)  // Carga diferida de hospedaje-test TEMPORAL
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
