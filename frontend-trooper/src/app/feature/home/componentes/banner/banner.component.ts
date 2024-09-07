import { Component } from '@angular/core';
import { FiltroService } from '../../../../shared/services/filtro.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  suggestions: any[] = []; // Almacena las sugerencias
  selectedLocation: any = null; // La ubicación seleccionada

  constructor(private filtroService: FiltroService) { }

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
}
