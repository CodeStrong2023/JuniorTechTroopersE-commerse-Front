import { Component } from '@angular/core';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  selectedFile: File | null = null;
  downloadURL: string | undefined;

  constructor() {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${Date.now()}_${this.selectedFile.name}`);
      
      uploadBytes(storageRef, this.selectedFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          this.downloadURL = url;
          console.log('File available at', this.downloadURL);
        });
      });
    }
  }

  onSubmit(form: any) {
    if (form.valid && this.downloadURL) {
      // Registrar al usuario con los datos y la URL de la imagen
      console.log('Formulario enviado con éxito:', form.value);
      console.log('Imagen subida en URL:', this.downloadURL);
    } else {
      console.error('Formulario inválido o imagen no subida.');
    }
  }
}
