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

  successMessage: string = '';
  errorMessage: string = '';
  showSuccess: boolean = false;
  showError: boolean = false;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null; // Asigna el archivo seleccionado
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.selectedFile) {
      this.isLoading = true;

      // Subir la imagen a Firebase (o el servicio que estés usando)
      this.imagesService.uploadImage(this.selectedFile).then(
        (downloadURL) => {
          // Construye el objeto RegisterUser con los valores del formulario
          const userData: RegisterUser = {
            userName: form.value.firstname.toLowerCase(), // Puedes ajustar la lógica
            password: form.value.password,
            imgUrl: downloadURL, // URL obtenida
            firstname: form.value.firstname,
            lastname: form.value.lastname,
            email: form.value.email,
            birthdate: form.value.birthdate,
            phone: form.value.phone,
            ubication_x: form.value.ubication_x, // Solo un campo de ubicación
          };

          // Llama al servicio de autenticación para registrar al usuario
          this.authService.register(userData).subscribe(
            (response) => {
              console.log('Usuario registrado exitosamente:', response);
              this.isLoading = false;
              this.successMessage = 'Registro exitoso.';
              this.showSuccess = true;
              this.hideMessages();
              this.router.navigate(['/login']);
            },
            (error) => {
              console.error('Error al registrar el usuario:', error);
              this.errorMessage = 'Error al registrar el usuario.';
              this.showError = true;
              this.isLoading = false;
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

  hideMessages() {
    setTimeout(() => {
      this.showSuccess = false;
      this.showError = false;
    }, 5000); 
  }
}
