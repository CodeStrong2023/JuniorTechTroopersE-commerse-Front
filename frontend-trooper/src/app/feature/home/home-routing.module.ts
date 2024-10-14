import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TestUploadComponent } from './componentes/test-upload/test-upload.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'contacto', component: ContactoComponent},
  {path: 'acerca', component: TestUploadComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
