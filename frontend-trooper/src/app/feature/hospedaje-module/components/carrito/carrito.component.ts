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
  //Data binding para pasar los datos del hospedaje y las fechas de check-in y check-out
  @Input() hospedaje!: DestinoSeleccionadoDTO;
  @Input() checkInDate!: string;
  @Input() checkOutDate!: string;
  @Output() close = new EventEmitter<void>();

  //Arrays para los select de fechas
  months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years: string[] = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() + i).toString());

  constructor(
    private ticketService: TicketService,
    private authService: AuthService
  ) { }

  //Función para formatear el número de la tarjeta
  formatCardNumber(event: any): void {
    const input = event.target;
    let value = input.value.replace(/\D/g, '').replace(/(.{4})/g, '$1-').trim();
    if (value.endsWith('-')) value = value.slice(0, -1);
    input.value = value;
  }

  confirmarReserva(): void {
    const cardNumber = (document.getElementById('card-number') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const expirationMonth = (document.getElementById('expiration-month') as HTMLSelectElement).value;
    const expirationYear = (document.getElementById('expiration-year') as HTMLSelectElement).value;

    if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber)) {
      this.showAlert('Número de tarjeta inválido', 'error');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      this.showAlert('Correo electrónico inválido', 'error');
      return;
    }

    const expirationDate = new Date(parseInt(expirationYear), parseInt(expirationMonth) - 1);
    if (expirationDate < new Date()) {
      this.showAlert('La fecha de expiración es inválida', 'error');
      return;
    }

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
  showAlert(message: string, type: 'success' | 'error'): void {
    // Implementar una función para mostrar alertas personalizadas
  }

  calcularTotal(): number {
    const startDate = new Date(this.checkInDate);
    const endDate = new Date(this.checkOutDate);
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return diffInDays * this.hospedaje.price;
  }
}
