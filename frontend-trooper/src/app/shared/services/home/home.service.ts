import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../../model/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:8080/home';

  constructor(private http: HttpClient) {}

  getHospedajes(): Observable<Home[]> {
    return this.http.get<Home[]>(this.apiUrl);
  }
}
