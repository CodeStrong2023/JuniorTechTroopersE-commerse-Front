import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinoDTO } from '../../model/destino-DTO';
import { DestinoSeleccionadoDTO } from '../../model/destino-seleccionado-DTO';
import { Hospedaje } from '../../model/hospedaje';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HospedajeService {

  //Variable que almacena la URL de la API para DESARROLLO
  //private baseUrl = 'http://localhost:8080/hospedaje';  // URL de la API de hospedajes

  //Variable que almacena la URL de la API para PRODUCCIÓN
  private baseUrl = 'https://login-o23e.onrender.com/hospedaje';  

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

  // Método para obtener los hospedajes del usuario autenticado
  getHospedajesByUser(): Observable<Hospedaje[]> {
    const token = this.authService.getToken(); // Obtiene el token del AuthService

    if (!token) {
      throw new Error('Usuario no autenticado. Por favor, inicia sesión.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Añade el token en los headers
    });

    // Realiza la petición GET para obtener los hospedajes
    return this.http.get<Hospedaje[]>(this.baseUrl, { headers });
  }


   // Método para obtener los destinos de hospedajes (nueva URL)
   getDestinosHospedajes(): Observable<DestinoDTO[]> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('Usuario no autenticado. Por favor, inicia sesión.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<DestinoDTO[]>(`${this.baseUrl}/destinos`, { headers });
  }

  // Método para obtener un hospedaje específico
  getHospedajeSeleccionado(hospedajeToken: string): Observable<DestinoSeleccionadoDTO> {
    const token = this.authService.getToken();

    if (!token) {
      throw new Error('Usuario no autenticado. Por favor, inicia sesión.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<DestinoSeleccionadoDTO>(`${this.baseUrl}/destinos/${hospedajeToken}`, { headers });
  }
  
  // Método para obtener hospedajes filtrados por localidad y fecha
  getHospedajesFiltrados(locality: string, date: string): Observable<Hospedaje[]> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('Usuario no autenticado. Por favor, inicia sesión.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Hospedaje[]>(`${this.baseUrl}/destinos?locality=${locality}&date=${date}`, { headers });
  }
}
