import { Injectable } from '@angular/core';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

// Servicio para subir imágenes a Firebase Storage
export class ImagesService {

  constructor() { }


  // Método para subir una imagen a Firebase Storage
  uploadImage(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      //Referencia al storage y a la imagen
      const storage = getStorage();
      //Crear una referencia a la imagen con un nombre único
      const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
      //Subir la imagen y obtener la URL de descarga
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log('Imagen subida, URL:', url);
          resolve(url);
        }).catch(reject);
      }).catch(reject);
    });
  }
}
