import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinoSeleccionadoDTO } from '../../../../shared/model/destino-seleccionado-DTO';
import { HospedajeService } from '../../../../shared/services/hospedaje/hospedaje.service';

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

//Inyectamos el servicio de hospedaje y el servicio de rutas
  constructor(
    private route: ActivatedRoute,
    private hospedajeService: HospedajeService
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
}