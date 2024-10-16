import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };
  showPassword = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  // Controlar visibilidad de las burbujas de error
  showEmailError = false;
  showPasswordError = false;

  constructor(private authService: AuthService, private router: Router) {}

  // Método para mostrar/ocultar la contraseña
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Método para manejar el envío del formulario
  onSubmit(form: any) {
    if (form.invalid) {
      return;
    }
  
    this.authService.login(this.credentials).subscribe(
      (response) => {
        if (response && response.token) {
          // Login exitoso, redirigir
          console.log('Login exitoso:', response);
          this.showSuccessMessage = true;
          this.showErrorMessage = false;
          setTimeout(() => {
            this.router.navigate(['/perfil-usuario']);
          }, 2000);  // Redirige después de 2 segundos
        } else {
          // Si no hay token en la respuesta, el login ha fallado
          this.showErrorMessage = true;
          this.showSuccessMessage = false;
          this.hideMessages();
        }
      },
      (error) => {
        console.error('Error durante el login:', error);        
        this.hideMessages();
      }
      
    )};

  hideMessages() {
      setTimeout(() => {
        this.showSuccessMessage = false;
        this.showErrorMessage = false;
      }, 5000);
    }

  // Validar campo al hacer clic fuera del input
  validateField(form: any, field: string) {
    if (field === 'email') {
      this.showEmailError = form.controls['email'] && !form.controls['email'].valid;
    } else if (field === 'password') {
      this.showPasswordError = form.controls['password'] && !form.controls['password'].valid;
    }
  }
}
