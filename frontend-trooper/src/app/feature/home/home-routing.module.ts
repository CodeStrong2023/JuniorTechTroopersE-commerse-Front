import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { AboutComponent } from './componentes/about/about.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TestUploadComponent } from './componentes/trooper-stay/test-upload.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'acerca', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'  // Desplaza hacia la parte superior al navegar
    })
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  constructor(private viewportScroller: ViewportScroller, private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof Scroll))
      .subscribe((e: Scroll) => {
        if (e.position) {
          // Si hay una posición guardada, vuelve a esa posición
          this.viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          // Si hay un ancla (por ejemplo, un link con fragmento #id), navega hacia él
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else {
          // Si no hay posición guardada ni ancla, vuelve al inicio
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
