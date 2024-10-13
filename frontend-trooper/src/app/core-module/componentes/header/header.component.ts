import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isLoggedIn: boolean = false;  // Variable para verificar si está autenticado

  //Inicializa el componente, se ejecuta al cargar el componente
  constructor(private router: Router, private authService: AuthService) {}
  
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated(); // Verifica si está autenticado
  }

  logout(): void {
    this.authService.logout();  // Llama al método de logout del servicio
    this.isLoggedIn = false;
    this.router.navigate(['/login']);  // Redirige al login
  }

  goToLogin() {
    this.router.navigate(['/home/login']);
  }
}
