import { Injectable } from '@angular/core';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

// Servicio para subir imágenes a Firebase Storage
export class ImagesService {

  constructor(private storage: Storage) {}

  uploadImage(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const filePath = `images/${Date.now()}_${file.name}`;
      const storageRef = ref(this.storage, filePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          // Puedes manejar el progreso de la subida si lo deseas
        }, 
        (error) => reject(error), 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL); // Retorna la URL de descarga
          });
        }
      );
    });
  }
}
