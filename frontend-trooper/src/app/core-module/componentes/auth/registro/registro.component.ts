import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';  // Asegúrate de importar tu servicio
import { AngularFireStorage } from '@angular/fire/compat/storage';  // Asegúrate de tener la librería instalada
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario = {
    user_rol: '6b5d77ac-4101-487c-910e-334c1e1f7342',
    userName: '',
    password: '',
    imgUrl: '',
    firstname: '',
    lastname: '',
    email: '',
    birthdate: '',
    phone: '',
    ubication_x: 666,  // Si tienes valores de ubicación, cámbialos aquí
    ubication_y: 666
  };

  selectedImage: File = null;

  constructor(
    private router: Router,
    private userService: UserService,
    private storage: AngularFireStorage // Para manejar la subida de archivos
  ) {}

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      this.selectedImage = target.files[0];
    }
  }

  registrarUsuario() {
    if (this.selectedImage) {
      const filePath = `user_images/${this.selectedImage.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedImage);
      
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.usuario.imgUrl = url; // Guarda la URL de la imagen

            // Llama al servicio para registrar el usuario
            this.userService.registerUser(this.usuario).subscribe(response => {
              console.log('Usuario registrado', response);
              // Navegar a otra página si es necesario
              this.router.navigate(['/login']); // O a otra ruta
            }, error => {
              console.error('Error durante el registro', error);
            });
          });
        })
      ).subscribe();
    }
  }
}
