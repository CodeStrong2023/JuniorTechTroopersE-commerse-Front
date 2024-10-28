import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../../model/ticket';
import { TicketResponseDTO } from '../../model/ticket-DTO';

@Injectable({
  providedIn: 'root'
})
//Servicio para generar un ticket de hospedaje
export class TicketService {

  //URL de la API para generar un ticket de hospedaje en MODO DESARROLLO
  private apiUrl = 'http://localhost:8080/ticket';

  //URL de la API para generar un ticket de hospedaje en MODO PRODUCCIÓN
  //private apiUrl = '/ticket';

  constructor(private http: HttpClient) {}

  generateTicket(ticketData: Ticket, userToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, ticketData, { headers });
  }

  getTicketsReservas(userToken: string): Observable<TicketResponseDTO[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`
    });
    return this.http.get<TicketResponseDTO[]>(`${this.apiUrl}/reservas`, { headers });
  }

  getUserTickets(userToken: string): Observable<TicketResponseDTO[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`
    });
    return this.http.get<TicketResponseDTO[]>(`${this.apiUrl}/user`, { headers });
  }
}
