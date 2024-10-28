import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:8080/ticket';

  constructor(private http: HttpClient) {}

  generateTicket(ticketData: Ticket, userToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, ticketData, { headers });
  }
}
