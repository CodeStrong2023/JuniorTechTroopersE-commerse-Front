import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinoSeleccionadoDTO } from '../../../../shared/model/destino-seleccionado-DTO';
import { HospedajeService } from '../../../../shared/services/hospedaje/hospedaje.service';
import { TicketService } from '../../../../shared/services/ticket/ticket.service';

@Component({
  selector: 'app-detalle-hospedaje',
  templateUrl: './detalle-hospedaje.component.html',
  styleUrl: './detalle-hospedaje.component.css'
})
export class DetalleHospedajeComponent implements OnInit {
  //Variable para almacenar los datos del hospedaje seleccionado
  hospedaje!: DestinoSeleccionadoDTO;
  //Variable para saber si los hospedajes están cargando
  isHospedajesLoading: boolean = true;
  checkInDate!: string;
  checkOutDate!: string;
  isPagoOpen: boolean = false;

  errorMessage: string | null = null;

  //Inyectamos el servicio de hospedaje y el servicio de rutas
  constructor(
    private route: ActivatedRoute,
    private hospedajeService: HospedajeService,
    private ticketService: TicketService
  ) { }

  //Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
    const hospedajeToken = this.route.snapshot.paramMap.get('hospedajeToken');
    if (hospedajeToken) {
      this.hospedajeService.getHospedajeSeleccionado(hospedajeToken)
        .subscribe((data: DestinoSeleccionadoDTO) => {
          this.hospedaje = data;
          this.isHospedajesLoading = false;
        });
    }
  }

  abrirPago(): void {
    const today = new Date().toISOString().split('T')[0];
    if (!this.checkInDate || !this.checkOutDate) {
      this.errorMessage = 'Por favor, selecciona fechas de check-in y check-out.';
    } else if (this.checkInDate < today || this.checkOutDate < today) {
      this.errorMessage = 'Las fechas deben ser actuales o futuras.';
    } else if (this.checkInDate >= this.checkOutDate) {
      this.errorMessage = 'La fecha de check-out debe ser posterior a la de check-in.';
    } else {
      this.errorMessage = null; // Limpiar el mensaje de error
      this.isPagoOpen = true;
    }
  }

  cerrarPago(): void {
    this.isPagoOpen = false;
  }
}