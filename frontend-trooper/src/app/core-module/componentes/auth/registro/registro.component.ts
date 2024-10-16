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
  showPassword: boolean = false;
  passwordsMatch: boolean = false; // Para verificar coincidencia de contraseñas
  isAdult: boolean = true; // Para verificar si el usuario es mayor de edad

  constructor(
    private authService: AuthService, 
    private router: Router,
    private imagesService: ImagesService
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.selectedFile && this.passwordsMatch && this.isAdult) {
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
              setTimeout(() => this.router.navigate(['/login']), 3000);
            },
            (error) => {
              this.isLoading = false;
              this.errorMessage = 'Error al registrar el usuario.';
              this.showError = true;
              this.hideMessages();  // Ocultar mensajes después de un tiempo
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
      if (!this.passwordsMatch) {
        this.errorMessage = 'Las contraseñas no coinciden.';
        this.showError = true;
      } else if (!this.isAdult) {
        this.errorMessage = 'Debes ser mayor de edad para registrarte.';
        this.showError = true;
      } else {
        this.errorMessage = 'Por favor, completa todos los campos correctamente.';
        this.showError = true;
      }
      this.hideMessages();
    }
  }

  hideMessages() {
    setTimeout(() => {
      this.showSuccess = false;
      this.showError = false;
    }, 5000);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Verificar coincidencia de contraseñas
  checkPasswords(password: string, confirmPassword: string) {
    this.passwordsMatch = password === confirmPassword;
  }
  

  // Verificar si el usuario es mayor de edad
  checkAge(birthdate: string) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      this.isAdult = age > 18;
    } else {
      this.isAdult = age >= 18;
    }
  }
}
