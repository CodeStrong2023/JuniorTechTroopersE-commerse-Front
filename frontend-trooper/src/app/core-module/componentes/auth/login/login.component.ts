import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Objeto para almacenar las credenciales de usuario
  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  // Método para manejar el envío del formulario
  onSubmit() {
    // Llamamos al método login del servicio de autenticación
    this.authService.login(this.credentials).subscribe(
      response => {
        console.log('Login exitoso:', response);
        // Redirigimos al usuario al perfil después del login exitoso
        this.router.navigate(['/perfil-usuario']);
      },
      error => {
        console.error('Error durante el login:', error);
        // Aquí podrías manejar los errores y mostrar un mensaje en la UI
      }
    );
  }
}
