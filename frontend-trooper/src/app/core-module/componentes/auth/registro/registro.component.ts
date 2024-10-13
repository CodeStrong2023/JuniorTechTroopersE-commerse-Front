import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterUser } from '../../../../shared/model/register-user';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { ImagesService } from '../../../../shared/services/images-service/images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  selectedFile: File | null = null;
  isLoading: boolean = false;
  defaultImgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsHsf7pQFE45aJ_-rkWcO_nkBoa5gYSN39g&s'; // URL por defecto

  constructor(private authService: AuthService, private router: Router) {}

  // Variables para los mensajes
  successMessage: string = '';
  errorMessage: string = '';
  showSuccess: boolean = false;
  showError: boolean = false;

  // Envía el formulario
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isLoading = true; // Inicia el estado de carga

      const userData: RegisterUser = {
        user_rol: '6b5d77ac-4101-487c-910e-334c1e1f7342', // ID del rol de usuario
        userName: form.value.firstname.toLowerCase(), // o cualquier lógica para generar el username
        password: form.value.password,
        imgUrl: this.defaultImgUrl, // URL por defecto de la imagen
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        email: form.value.email,
        birthdate: form.value.birthdate,
        phone: form.value.phone,
        ubication_x: 666, // Puedes reemplazar estos valores por lo que necesites
        ubication_y: 666,
      };

      // Llama al servicio de autenticación para registrar al usuario
      this.authService.register(userData).subscribe(
        (response) => {
          console.log('Usuario registrado exitosamente:', response);
          this.isLoading = false; // Finaliza el estado de carga
          this.successMessage = 'Registro exitoso.';
          this.showSuccess = true;
          this.hideMessages(); // Oculta los mensajes después de un tiempo
          this.router.navigate(['/login']); // Redirige al usuario al login
        },
        (error) => {
          console.error('Error al registrar el usuario:', error);
          this.errorMessage = 'Error al registrar el usuario.';
          this.showError = true;
          this.isLoading = false; // Finaliza el estado de carga
        }
      );
    } else {
      console.error('Formulario inválido.');
    }
  }

  // Oculta los mensajes después de un tiempo
  hideMessages() {
    setTimeout(() => {
      this.showSuccess = false;
      this.showError = false;
    }, 5000); // Oculta después de 5 segundos
  }
}
