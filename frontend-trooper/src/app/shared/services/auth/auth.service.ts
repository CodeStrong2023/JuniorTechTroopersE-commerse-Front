import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// Servicio que se encarga de la autenticación de los usuarios (registro, login, perfil y logout)
export class AuthService {

  // Variables que almacenan las URLs de la API EN DESARROLLO
  //private baseUrl = 'http://localhost:8080/auth';
  //private profileUrl = 'http://localhost:8080/users/perfil';
  // Variable que almacena el token del usuario
  private token: string | null = null;

  //Variable que almacena la URL de la API PRODUCCIÓN
  private baseUrl = 'https://login-o23e.onrender.com/auth';
  private profileUrl = 'https://login-o23e.onrender.com/users/perfil';

  // Constructor que inyecta el servicio HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) {}

  // Método para registrar un usuario
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Método para loguear un usuario
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      tap((response: any) => {
        this.token = response.token || null;  // Guarda el token de respuesta
        if (this.token) {
          localStorage.setItem('jwt_token', this.token); // Almacena el token en localStorage
        }
      })
    );
  }

  // Método para obtener el perfil del usuario logueado
  getProfile(): Observable<any> {
    const token = this.getToken(); // Obtiene el token actual, ya sea de memoria o localStorage

    // Verifica si el token es válido
    if (!token) {
      throw new Error('Token not found, please login.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get(this.profileUrl, { headers });
  }

  // Método para obtener el token almacenado
  getToken(): string | null {
    return this.token || localStorage.getItem('jwt_token');
  }

  // Método para desloguear al usuario
  logout(): void {
    this.token = null;
    localStorage.removeItem('jwt_token');
  }
  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken();  // Devuelve true si el token existe
  }

}
