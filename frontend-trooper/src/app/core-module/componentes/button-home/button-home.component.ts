import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-button-home',
  templateUrl: './button-home.component.html',
  styleUrl: './button-home.component.css'
})
export class ButtonHomeComponent {
  isLoggedIn: boolean = false;  // Variable para verificar autenticación

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Verifica si el usuario está autenticado
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  // Método para redirigir a la creación de hospedajes
  goToCreateHostel(): void {
    this.router.navigate(['/hospedaje/nuevo']);
  }

  // Método para redirigir al home
  goHome(): void {
    this.router.navigate(['/home']);
  }
}
