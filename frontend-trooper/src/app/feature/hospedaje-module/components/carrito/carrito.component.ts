import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DestinoSeleccionadoDTO } from '../../../../shared/model/destino-seleccionado-DTO';
import { Ticket } from '../../../../shared/model/ticket';
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

  constructor(private ticketService: TicketService) {}

  confirmarReserva(): void {
    const ticket: Ticket = {
      hospedajeToken: this.hospedaje.hospedajeToken,
      startDate: this.checkInDate,
      endDate: this.checkOutDate
    };

    const userToken = localStorage.getItem('userToken') || ''; // Obtener el token desde el almacenamiento

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
}
