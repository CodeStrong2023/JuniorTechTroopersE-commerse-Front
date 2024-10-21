import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hospedaje } from '../../../../shared/model/hospedaje';
import { FiltroService } from '../../../../shared/services/filtro.service';
import { HospedajeService } from '../../../../shared/services/hospedaje/hospedaje.service';
import { ImagesService } from '../../../../shared/services/images-service/images.service';

@Component({
  selector: 'app-nuevo-hospedaje',
  templateUrl: './nuevo-hospedaje.component.html',
  styleUrl: './nuevo-hospedaje.component.css'
})
export class NuevoHospedajeComponent {
  selectedFile: File | null = null;
  isLoading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  showSuccess: boolean = false;
  showError: boolean = false;

  // Autocompletado
  ubicationQuery: string = '';
  filteredLocations: any[] = [];

  // Propiedades del hospedaje
  hospedaje: Hospedaje = {
    name: '',
    capacity: 0,
    description: '',
    price: 0,
    locality: '',
    wifi: false,
    tv: false,
    garage: false,
    airConditioning: false,
    heating: false,
    pool: false,
    images: []
  };

  constructor(
    private hospedajeService: HospedajeService,
    private imagesService: ImagesService,
    private filtroService: FiltroService
  ) {}

  onUbicationInput() {
    if (this.ubicationQuery.length > 2) {
      this.filtroService.getAutocompleteSuggestions(this.ubicationQuery).subscribe(
        (suggestions) => {
          this.filteredLocations = suggestions;
        },
        (error) => {
          console.error('Error al obtener sugerencias de ubicación:', error);
        }
      );
    } else {
      this.filteredLocations = [];
    }
  }

  selectLocation(location: any) {
    this.hospedaje.locality = `${location.nombre}, ${location.provincia}`;
    this.filteredLocations = [];
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
  }

  uploadImageAndSubmit(form: NgForm) {
    if (this.selectedFile) {
      this.isLoading = true;
      this.imagesService.uploadImage(this.selectedFile).then((downloadURL) => {
        this.hospedaje.images.push({ imgUrl: downloadURL });
        this.submitForm(form); 
      }).catch((error) => {
        this.isLoading = false;
        this.errorMessage = 'Error al subir la imagen';
        this.showError = true;
        console.error(error);
      });
    } else {
      this.submitForm(form); 
    }
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.hospedajeService.createHospedaje(this.hospedaje).subscribe(
        (response) => {
          this.isLoading = false;
          this.showSuccess = true;
          this.successMessage = 'Hospedaje registrado exitosamente';
          form.reset();
        },
        (error) => {
          this.isLoading = false;
          this.showError = true;
          this.errorMessage = 'Error al registrar el hospedaje';
          console.error(error);
        }
      );
    }
  }

  onSubmit(form: NgForm) {
    if (this.selectedFile) {
      this.uploadImageAndSubmit(form);
    } else {
      this.submitForm(form);
    }
  }
}
