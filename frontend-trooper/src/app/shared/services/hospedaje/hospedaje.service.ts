import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospedaje } from '../../model/hospedaje';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HospedajeService {

  private baseUrl = 'http://localhost:8080/hospedaje';  // URL de la API de hospedajes

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Método para crear un nuevo hospedaje
  createHospedaje(hospedaje: any): Observable<any> {
    const token = this.authService.getToken(); // Obtiene el token del AuthService

    if (!token) {
      throw new Error('Usuario no autenticado. Por favor, inicia sesión.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    // Realiza la petición POST para crear el hospedaje
    return this.http.post(this.baseUrl, hospedaje, { headers });
  }
}
