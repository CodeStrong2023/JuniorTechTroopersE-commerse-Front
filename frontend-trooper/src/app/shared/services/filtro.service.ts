import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  private apiUrl = 'https://apis.datos.gob.ar/georef/api/localidades';

  constructor(private http: HttpClient) { }

  getAutocompleteSuggestions(query: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}?nombre=${query}&max=10`).pipe(
      map(response => 
        response.localidades.map((localidad: any) => ({
          nombre: localidad.nombre,
          provincia: localidad.provincia.nombre 
        }))
      )
    );
  }
}