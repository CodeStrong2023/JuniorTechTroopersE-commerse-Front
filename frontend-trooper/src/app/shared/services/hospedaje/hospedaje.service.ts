import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospedaje } from '../../model/hospedaje';

@Injectable({
  providedIn: 'root'
})
export class HospedajeService {

  //Variable que almacena la URL de la API
  private apiUrl = 'http://localhost:8080/hospedaje';  

  //Injectamos el servicio HttpClient
  constructor(private http: HttpClient) {}

  // Método para crear un nuevo hospedaje
  createHospedaje(hospedaje: Hospedaje, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    // Realizamos la petición POST
    return this.http.post(this.apiUrl, hospedaje, { headers });
  }

  // Método para obtener la lista de hospedajes
  getHospedajes(token: string): Observable<Hospedaje[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    //Retornamos la petición GET
    return this.http.get<Hospedaje[]>(this.apiUrl, { headers });
  }
}
