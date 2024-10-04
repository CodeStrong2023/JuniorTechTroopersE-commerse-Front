import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-hospedaje',
  templateUrl: './detalle-hospedaje.component.html',
  styleUrl: './detalle-hospedaje.component.css'
})
export class DetalleHospedajeComponent {
  isCartVisible: boolean = false;
  cantidadNoches: number = 1;
  metodoPago: string = 'tarjeta';
  nombreCompleto: string = '';
  email: string = '';
  numeroTarjeta: string = '';
  fechaExpiracion: string = '';
  cvv: string = '';
  checkInDate: string = '';
  checkOutDate: string = '';
  hospedaje = {
    nombre: 'Hospedaje de lujo',
    precioPorNoche: 150000
  };

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  calcularNoches() {
    const checkIn = new Date(this.checkInDate);
    const checkOut = new Date(this.checkOutDate);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    this.cantidadNoches = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  realizarCompra() {
    const total = this.cantidadNoches * this.hospedaje.precioPorNoche;
    
    // Validación para método de pago tarjeta
    if (this.metodoPago === 'tarjeta' && (!this.numeroTarjeta || !this.fechaExpiracion || !this.cvv)) {
      alert('Por favor, complete los datos de la tarjeta.');
      return;
    }

    alert(`Reserva confirmada para ${this.nombreCompleto}. Total a pagar: $${total}`);
    
    // Lógica adicional para procesar la compra
  }
}
