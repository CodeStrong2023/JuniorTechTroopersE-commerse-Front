import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { ImagesService } from '../../../../shared/services/images-service/images.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  selectedFile: File | null = null;
  downloadURL: string | undefined;
  isLoading: boolean = false;

  constructor(
    private imagesService: ImagesService,
    private authService: AuthService
  ) {}

  // Captura el archivo seleccionado
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Envía el formulario
  onSubmit(form: NgForm) {
    if (form.valid && this.selectedFile) {
      this.isLoading = true; // Inicia el estado de carga
      
      // Primero, sube la imagen
      this.imagesService.uploadImage(this.selectedFile).then((url) => {
        this.downloadURL = url;
        console.log('Imagen subida correctamente:', this.downloadURL);

        // Luego, registra al usuario con los datos del formulario y la URL de la imagen
        const userData = {
          firstname: form.value.firstname,
          lastname: form.value.lastname,
          email: form.value.email,
          password: form.value.password,
          phone: form.value.phone,
          birthdate: form.value.birthdate,
          imgUrl: this.downloadURL // URL de la imagen subida
        };

        // Llama al servicio de autenticación para registrar al usuario
        this.authService.register(userData).subscribe(
          (response) => {
            console.log('Usuario registrado exitosamente:', response);
            this.isLoading = false; // Finaliza el estado de carga
            // Aquí puedes agregar lógica adicional, como redireccionar o mostrar un mensaje de éxito
          },
          (error) => {
            console.error('Error al registrar el usuario:', error);
            this.isLoading = false; // Finaliza el estado de carga
          }
        );
      }).catch((error) => {
        console.error('Error al subir la imagen:', error);
        this.isLoading = false; // Finaliza el estado de carga
      });
    } else {
      console.error('Formulario inválido o imagen no seleccionada.');
    }
  }
}
