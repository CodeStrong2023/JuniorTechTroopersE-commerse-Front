import { Component, OnInit } from '@angular/core';
import { FiltroService } from '../../../shared/services/filtro.service';
import { Hospedaje } from '../../../shared/model/hospedaje';
import { HospedajeService } from '../../../shared/services/hospedaje/hospedaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent implements OnInit{
  suggestions: any[] = [];
  selectedLocation: any = null;
  selectedDate: string = '';
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';
  showAlert: boolean = false;

  constructor(
    private filtroService: FiltroService,
    private hospedajeService: HospedajeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // Subscribirse a eventos de navegación para mostrar alertas si es necesario
    this.router.events.subscribe(() => {
      if (this.showAlert) {
        setTimeout(() => this.showAlert = false, 5000); // Ocultar alerta después de 5 segundos
      }
    });
  }

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
  onSearch(): void {
    if (!this.selectedLocation) {
      this.showFieldError('localidad');
      return;
    }
    if (!this.selectedDate) {
      this.showFieldError('fecha');
      return;
    }

    const locality = this.selectedLocation.nombre;
    const date = this.selectedDate;

    // Mostrar mensaje de éxito antes de redirigir
    this.showSuccessMessage('Búsqueda realizada con éxito');
    this.router.navigate(['/hospedaje'], { queryParams: { locality, date } });
  }

  showFieldError(field: string): void {
    this.alertMessage = `El campo ${field} es obligatorio`;
    this.alertType = 'error';
    this.showAlert = true;
    setTimeout(() => this.showAlert = false, 5000);
  }

  showSuccessMessage(message: string): void {
    this.alertMessage = message;
    this.alertType = 'success';
    this.showAlert = true;
    setTimeout(() => this.showAlert = false, 5000);
  }
}
