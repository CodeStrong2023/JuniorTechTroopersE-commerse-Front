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
  isLoading: boolean = false; // Indica si está en proceso de carga

  constructor(
    private imagesService: ImagesService,
    private authService: AuthService
  ) {}

  // Captura el archivo seleccionado del input
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Método que maneja el envío del formulario
  onSubmit(form: NgForm) {
    if (form.valid && this.selectedFile) {
      this.isLoading = true; // Comienza el estado de carga
      
      // Sube la imagen al almacenamiento de Firebase
      this.imagesService.uploadImage(this.selectedFile).then((url) => {
        this.downloadURL = url; // URL de la imagen subida
        console.log('Imagen subida correctamente:', this.downloadURL);

        // Construye los datos del usuario con la URL de la imagen
        const userData = {
          firstname: form.value.firstname,
          lastname: form.value.lastname,
          email: form.value.email,
          password: form.value.password,
          phone: form.value.phone,
          birthdate: form.value.birthdate,
          imgUrl: this.downloadURL // Añadimos la URL de la imagen
        };

        // Registra al usuario a través del servicio Auth
        this.authService.register(userData).subscribe(
          (response) => {
            console.log('Usuario registrado exitosamente:', response);
            this.isLoading = false; // Finaliza el estado de carga
            // Aquí podrías redireccionar o mostrar un mensaje de éxito
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
