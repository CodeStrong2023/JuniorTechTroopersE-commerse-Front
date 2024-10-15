import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../../model/home';

@Injectable({
  providedIn: 'root'
})

// Servicio que se encarga de obtener los hospedajes de la sección de inicio
export class HomeService {

  //Variable que almacena la URL de la API
  private apiUrl = 'http://localhost:8080/home';

  //Constructor que inyecta el servicio HttpClient
  constructor(private http: HttpClient) {}

  //Método que obtiene los hospedajes de la sección de inicio
  getHospedajes(): Observable<Home[]> {
    //Retorna un observable con los hospedajes
    return this.http.get<Home[]>(this.apiUrl);
  }
}
