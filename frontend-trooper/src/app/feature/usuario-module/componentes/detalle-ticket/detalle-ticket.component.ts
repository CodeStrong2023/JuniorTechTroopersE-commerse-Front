import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TicketResponseDTO } from '../../../../shared/model/ticket-DTO';

@Component({
  selector: 'app-detalle-ticket',
  templateUrl: './detalle-ticket.component.html',
  styleUrl: './detalle-ticket.component.css'
})
export class DetalleTicketComponent {
  @Input() ticketDetail!: TicketResponseDTO; // Detalles de la reserva/alojamiento
  @Output() close = new EventEmitter<void>(); // Evento para cerrar el modal
  @Input() role: string = 'Inquilino'; // Rol que determina el texto


  //Método para cerrar la card
  closeModal() {
    this.close.emit();
  }
}
