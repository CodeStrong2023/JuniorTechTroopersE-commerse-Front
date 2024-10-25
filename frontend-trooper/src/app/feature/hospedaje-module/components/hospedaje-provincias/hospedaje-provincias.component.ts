import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinoDTO } from '../../../../shared/model/destino-DTO';
import { HospedajeService } from '../../../../shared/services/hospedaje/hospedaje.service';

@Component({
  selector: 'app-hospedaje-provincias',
  templateUrl: './hospedaje-provincias.component.html',
  styleUrls: ['./hospedaje-provincias.component.css']
})
export class HospedajeProvinciasComponent implements OnInit{

  public cards: any[] = [];
  defaultCards: any;

  constructor(private hospedajeService: HospedajeService) {}

  ngOnInit(): void {
    this.hospedajeService.getDestinosHospedajes().subscribe((destinos: DestinoDTO[]) => {
      this.cards = destinos.map(destino => ({
        title: destino.nombreHospedaje,
        image: destino.img_url,
        price: destino.price,
        hospedajeToken: destino.hospedajeToken  // Agregar el token del hospedaje
      }));
    });
    
  }

  onSortChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const order = selectElement.value;
  
    if (order === 'asc') {
      this.cards.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      this.cards.sort((a, b) => b.price - a.price);
    } else {
      // Volver a la lista por defecto (más relevantes)
      this.cards = [...this.defaultCards]; // Clona la lista original
    }
  }
  
 
}
