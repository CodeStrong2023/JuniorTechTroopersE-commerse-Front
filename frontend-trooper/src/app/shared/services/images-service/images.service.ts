import { Injectable } from '@angular/core';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

// Servicio para subir imágenes a Firebase Storage
export class ImagesService {

  // Constructor que inyecta el servicio de almacenamiento de Firebase
  constructor(private storage: Storage) {}

  // Método para subir una imagen a Firebase Storage
  uploadImage(file: File): Promise<string> {
    // Retorna una promesa que resuelve la URL de descarga de la imagen
    return new Promise((resolve, reject) => {
      // Genera un nombre único para la imagen
      const filePath = `images/${Date.now()}_${file.name}`;
      const storageRef = ref(this.storage, filePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Escucha los cambios en el estado de la subida
      uploadTask.on('state_changed', 
        (snapshot) => {          
        }, 
        (error) => reject(error), 
        () => {
          // Obtiene la URL de descarga de la imagen
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  }
}
