import { Component } from '@angular/core';
import { FiltroService } from '../../../shared/services/filtro.service';
import { Hospedaje } from '../../../shared/model/hospedaje';
import { HospedajeService } from '../../../shared/services/hospedaje/hospedaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent {
  suggestions: any[] = []; // Almacena las sugerencias
  selectedLocation: any = null; // La ubicación seleccionada
  selectedDate: string = ''; // La fecha seleccionada

  constructor(
    private filtroService: FiltroService,
    private hospedajeService: HospedajeService,
    private router: Router
    ) { }

  // Método que busca localizaciones cuando el usuario escribe
  onSearchLocation(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input.value;
    if (query.length > 1) { // Solo buscar si el usuario ha escrito al menos 3 letras
      this.filtroService.getAutocompleteSuggestions(query).subscribe(
        (data) => {
          this.suggestions = data; // Asignar las sugerencias de localidades
        },
        (error) => {
          console.error('Error fetching autocomplete suggestions', error);
        }
      );
    } else {
      this.suggestions = [];
    }
  }

  // Método para seleccionar una sugerencia
  selectSuggestion(suggestion: any) {
    this.selectedLocation = suggestion; // Guardar la localización seleccionada
    console.log('Selected location:', suggestion);
    this.suggestions = []; // Limpiar sugerencias después de seleccionar
  }

  // Método para capturar la fecha seleccionada
  onSelectDate(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedDate = input.value;
  }

  // Método para buscar hospedajes con los filtros
  onSearch() {
    if (this.selectedLocation && this.selectedDate) {
      const locality = this.selectedLocation.nombre;
      const date = this.selectedDate;

      // Si estamos en la sección de /hospedajes, realizamos la búsqueda sin redirigir
      if (this.router.url === '/hospedajes') {
        this.hospedajeService.getHospedajesFiltrados(locality, date).subscribe(
          (data) => {
            // Manejar los resultados de la búsqueda aquí
            console.log('Filtered hospedajes:', data);
          },
          (error) => {
            console.error('Error fetching filtered hospedajes', error);
          }
        );
      } else {
        // Redirigir a la sección de /hospedajes con los parámetros de búsqueda
        this.router.navigate(['/hospedajes'], { queryParams: { locality, date } });
      }
    } else {
      console.error('Por favor, selecciona una ubicación y una fecha');
    }
  }
}
