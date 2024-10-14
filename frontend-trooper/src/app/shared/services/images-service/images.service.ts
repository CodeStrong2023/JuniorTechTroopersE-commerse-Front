import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Servicio para subir imágenes a Firebase Storage
export class ImagesService {

  constructor(private storage: AngularFireStorage) { }

  // Método para subir la imagen y obtener la URL de descarga
  uploadImage(file: File, path: string): Observable<string> {
    const filePath = `${path}/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    return new Observable<string>((observer) => {
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            observer.next(url); // Retorna la URL
            observer.complete();
          }, error => observer.error(error));
        })
      ).subscribe();
    });
  }
}
