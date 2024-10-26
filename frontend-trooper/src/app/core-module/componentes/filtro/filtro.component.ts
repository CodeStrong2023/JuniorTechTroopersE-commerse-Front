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
  showLocationError: boolean = false;
  showDateError: boolean = false;

  constructor(
    private filtroService: FiltroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if (this.showAlert) {
        setTimeout(() => this.showAlert = false, 5000);
      }
    });
  }

  onSearchLocation(event: Event): void {
    const input = event.target as HTMLInputElement;
    const query = input.value;
    if (query.length > 1) {
      this.filtroService.getAutocompleteSuggestions(query).subscribe(
        (data) => {
          this.suggestions = data;
        },
        (error) => {
          console.error('Error fetching autocomplete suggestions', error);
        }
      );
    } else {
      this.suggestions = [];
    }
  }

  selectSuggestion(suggestion: any): void {
    this.selectedLocation = suggestion;
    this.suggestions = [];
    this.showLocationError = false;
  }

  onSelectDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedDate = new Date(input.value);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Ignoramos la hora en currentDate

    // Convertimos ambas fechas al formato "YYYY-MM-DD" para compararlas
    const selectedDateString = selectedDate.toISOString().split('T')[0];
    const currentDateString = currentDate.toISOString().split('T')[0];

    if (selectedDateString < currentDateString) {
        this.showFieldError('fecha', 'La fecha debe ser actual o futura');
    } else {
        this.selectedDate = input.value;
        this.showDateError = false;
    }
}


  onSearch(): void {
    if (!this.selectedLocation) {
      this.showFieldError('localidad', 'El campo localidad es obligatorio');
      return;
    }
    if (!this.selectedDate) {
      this.showFieldError('fecha', 'El campo fecha es obligatorio');
      return;
    }

    const locality = this.selectedLocation.nombre;
    const date = this.selectedDate;

    this.showSuccessMessage('Búsqueda realizada con éxito');
    this.router.navigate(['/hospedaje'], { queryParams: { locality, date }, fragment: 'filtrado-hospedaje' });
  }

  showFieldError(field: string, message: string): void {
    this.alertMessage = message;
    this.alertType = 'error';
    this.showAlert = true;
    if (field === 'localidad') {
      this.showLocationError = true;
    }
    if (field === 'fecha') {
      this.showDateError = true;
    }
    setTimeout(() => {
      this.showAlert = false;
      if (field === 'localidad') {
        this.showLocationError = false;
      }
      if (field === 'fecha') {
        this.showDateError = false;
      }
    }, 5000);
  }

  showSuccessMessage(message: string): void {
    this.alertMessage = message;
    this.alertType = 'success';
    this.showAlert = true;
    setTimeout(() => this.showAlert = false, 5000);
  }
}
