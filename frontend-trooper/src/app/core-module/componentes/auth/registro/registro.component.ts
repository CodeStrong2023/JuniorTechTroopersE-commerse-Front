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
    private authService: AuthService
  ) {}

  // Captura el archivo seleccionado (actualmente no lo estamos usando, pero lo dejamos por si más adelante volvemos a usar la subida de imagen)
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Formatear la fecha en formato YYYY-MM-DD
  formatDate(date: Date): string {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();

    return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
  }

  // Envía el formulario
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isLoading = true; // Inicia el estado de carga
      
      // Formateamos la fecha antes de enviarla
      const formattedBirthdate = this.formatDate(form.value.birthdate);

      // Simulamos el registro con la URL de imagen predeterminada
      const userData = {
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        email: form.value.email,
        password: form.value.password,
        phone: form.value.phone,
        birthdate: formattedBirthdate,  // Fecha formateada
        ubication_x: form.value.ubication_x,
        ubication_y: form.value.ubication_y,
        createdAt: form.value.createdAt,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsHsf7pQFE45aJ_-rkWcO_nkBoa5gYSN39g&s' // URL simulada de imagen
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
    } else {
      console.error('Formulario inválido.');
    }
  }
}
