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
    const storage = getStorage();
    const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);

    return uploadBytes(storageRef, file).then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    });
  }
}
