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

  constructor(
    private authService: AuthService, 
    private router: Router,
    private imagesService: ImagesService // Inyecta el servicio de imágenes
  ) {}

  // Variables para los mensajes
  successMessage: string = '';
  errorMessage: string = '';
  showSuccess: boolean = false;
  showError: boolean = false;

  // Maneja la selección del archivo de imagen
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null; // Asigna el archivo seleccionado
  }

  // Envía el formulario
  onSubmit(form: NgForm) {
    if (form.valid && this.selectedFile) {
      this.isLoading = true; // Inicia el estado de carga

      // Subir la imagen a Firebase
      this.imagesService.uploadImage(this.selectedFile).then(
        (downloadURL) => {
          // Una vez que la imagen esté subida, se registra el usuario con la URL de la imagen
          const userData: RegisterUser = {
            user_rol: '6b5d77ac-4101-487c-910e-334c1e1f7342', // ID del rol de usuario
            userName: form.value.firstname.toLowerCase(), // o cualquier lógica para generar el username
            password: form.value.password,
            imgUrl: downloadURL, // URL obtenida de Firebase
            firstname: form.value.firstname,
            lastname: form.value.lastname,
            email: form.value.email,
            birthdate: form.value.birthdate,
            phone: form.value.phone,
            ubication_x: form.value.ubication_x, // Usar valores ingresados
            ubication_y: form.value.ubication_y,
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
        },
        (error) => {
          console.error('Error al subir la imagen:', error);
          this.errorMessage = 'Error al subir la imagen.';
          this.showError = true;
          this.isLoading = false;
        }
      );
    } else {
      console.error('Formulario inválido o archivo no seleccionado.');
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
