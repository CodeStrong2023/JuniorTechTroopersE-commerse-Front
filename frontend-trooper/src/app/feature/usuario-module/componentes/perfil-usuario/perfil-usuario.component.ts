import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {
  constructor(private router: Router) {}

  irANuevoHospedaje() {
    this.router.navigate(['/hospedaje/nuevo']);  
  }
}
