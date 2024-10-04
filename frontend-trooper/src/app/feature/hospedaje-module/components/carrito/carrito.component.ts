import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  @Input() hospedajeSeleccionado: any; // Datos del hospedaje seleccionado
  isVisible: boolean = false;
  cantidadNoches: number = 1; // Cantidad de noches por defecto
  total: number = 0;

  ngOnChanges() {
    this.calcularTotal();
  }

  // Calcular el total en base al precio y cantidad de noches
  calcularTotal() {
    this.total = this.hospedajeSeleccionado?.precio * this.cantidadNoches;
  }

  // Método para mostrar/ocultar el carrito
  toggleCart() {
    this.isVisible = !this.isVisible;
  }

  // Método para eliminar el hospedaje seleccionado
  eliminarHospedaje() {
    this.hospedajeSeleccionado = null;
    this.cantidadNoches = 1;
    this.total = 0;
    this.toggleCart();
  }

  // Método para realizar la compra (podrías integrar un servicio de pago aquí)
  realizarCompra() {
    alert('Compra realizada con éxito');
    this.eliminarHospedaje();
  }
}
