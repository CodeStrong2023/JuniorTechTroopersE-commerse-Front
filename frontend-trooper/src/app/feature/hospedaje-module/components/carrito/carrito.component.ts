import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DestinoSeleccionadoDTO } from '../../../../shared/model/destino-seleccionado-DTO';
import { Ticket } from '../../../../shared/model/ticket';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { TicketService } from '../../../../shared/services/ticket/ticket.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  @Input() hospedaje!: DestinoSeleccionadoDTO;
  @Input() checkInDate!: string;
  @Input() checkOutDate!: string;
  @Output() close = new EventEmitter<void>();

  constructor(
    private ticketService: TicketService,
    private authService: AuthService
  ) {}

  confirmarReserva(): void {
    const ticket: Ticket = {
      hospedajeToken: this.hospedaje.hospedajeToken,
      startDate: this.checkInDate,
      endDate: this.checkOutDate
    };

    // Obtener el token del usuario a través de AuthService
    const userToken = this.authService.getToken();
    
    if (!userToken) {
      alert('Por favor, inicie sesión para confirmar la reserva');
      return;
    }

    this.ticketService.generateTicket(ticket, userToken).subscribe({
      next: () => {
        alert('Reserva confirmada exitosamente');
        this.close.emit();
      },
      error: () => {
        alert('Hubo un error al confirmar la reserva');
      }
    });
  }

  calcularTotal(): number {
    const startDate = new Date(this.checkInDate);
    const endDate = new Date(this.checkOutDate);
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return diffInDays * this.hospedaje.price;
  }
}
