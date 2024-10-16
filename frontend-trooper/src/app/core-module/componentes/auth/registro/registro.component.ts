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
  successMessage: string = '';
  errorMessage: string = '';
  showSuccess: boolean = false;
  showError: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private imagesService: ImagesService
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.selectedFile) {
      this.isLoading = true;

      this.imagesService.uploadImage(this.selectedFile).then(
        (downloadURL) => {
          const userData: RegisterUser = {
            userName: form.value.userName.toLowerCase(),
            password: form.value.password,
            imgUrl: downloadURL,
            firstname: form.value.firstname,
            lastname: form.value.lastname,
            email: form.value.email,
            birthdate: form.value.birthdate,
            phone: form.value.phone,
            ubication_x: form.value.ubication_x,
          };

          this.authService.register(userData).subscribe(
            (response) => {
              this.isLoading = false;
              this.successMessage = 'Registro exitoso.';
              this.showSuccess = true;
              this.hideMessages();
              setTimeout(() => this.router.navigate(['/login']), 3000); // Redirige al login tras 3 segundos
            },
            (error) => {
              this.errorMessage = 'Error al registrar el usuario.';
              this.showError = true;
              this.isLoading = false;
              this.hideMessages();
            }
          );
        },
        (error) => {
          this.errorMessage = 'Error al subir la imagen.';
          this.showError = true;
          this.isLoading = false;
          this.hideMessages();
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
