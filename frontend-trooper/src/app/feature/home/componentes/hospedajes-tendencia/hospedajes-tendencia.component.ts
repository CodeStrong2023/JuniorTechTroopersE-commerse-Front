import { Component, OnInit } from '@angular/core';
import { Home } from '../../../../shared/model/home';
import { HomeService } from '../../../../shared/services/home/home.service';

@Component({
  selector: 'app-hospedajes-tendencia',
  templateUrl: './hospedajes-tendencia.component.html',
  styleUrl: './hospedajes-tendencia.component.css'
})
export class HospedajesTendenciaComponent implements OnInit {
  //Variables de la clase para almacenar los hospedajes y controlar la animación de carga
  hospedajes: Home[] = [];
  isHospedajesLoading: boolean = true;

  //Inyectamos el servicio de HomeService para traer hospedajes
  constructor(private homeService: HomeService) {}

  //Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.getHospedajes();
  }
  
   // Método para obtener los hospedajes desde el servicio
   getHospedajes(): void {
    this.homeService.getHospedajes().subscribe((data: Home[]) => {
      this.hospedajes = data.slice(0, 3); // Limitar a 3 hospedajes
      this.isHospedajesLoading = false; //Ocultamos la animación de carga
    });
  }

  // Método para redirigir a la página de detalles del hospedaje
  visitarHospedaje(url: string) {
    // Lógica para redirigir a la página de detalles
    console.log('Redirigiendo a:', url);
  }
}