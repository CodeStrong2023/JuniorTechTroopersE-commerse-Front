import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinoSeleccionadoDTO } from '../../../../shared/model/destino-seleccionado-DTO';
import { HospedajeService } from '../../../../shared/services/hospedaje/hospedaje.service';
import { TicketService } from '../../../../shared/services/ticket/ticket.service';

@Component({
  selector: 'app-detalle-tendencia',
  templateUrl: './detalle-tendencia.component.html',
  styleUrl: './detalle-tendencia.component.css'
})
export class DetalleTendenciaComponent implements OnInit {
  //Variable para almacenar los datos del hospedaje seleccionado
  hospedaje!: DestinoSeleccionadoDTO;
   //Variable para saber si los hospedajes están cargando
   isHospedajesLoading: boolean = true;
   checkInDate!: string;
   checkOutDate!: string;
   isPagoOpen: boolean = false;

//Inyectamos el servicio de hospedaje y el servicio de rutas
  constructor(
    private route: ActivatedRoute,
    private hospedajeService: HospedajeService,
    private ticketService: TicketService
  ) {}

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
    this.isPagoOpen = true;
  }

  cerrarPago(): void {
    this.isPagoOpen = false;
  }
}
