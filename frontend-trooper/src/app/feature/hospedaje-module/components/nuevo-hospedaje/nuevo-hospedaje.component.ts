import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Hospedaje } from '../../../../shared/model/hospedaje';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { FiltroService } from '../../../../shared/services/filtro.service';
import { HospedajeService } from '../../../../shared/services/hospedaje/hospedaje.service';
import { ImagesService } from '../../../../shared/services/images-service/images.service';

@Component({
  selector: 'app-nuevo-hospedaje',
  templateUrl: './nuevo-hospedaje.component.html',
  styleUrl: './nuevo-hospedaje.component.css'
})
export class NuevoHospedajeComponent {
  ubicationQuery: string = ''; // Para almacenar la consulta de ubicación
  filteredLocations: Array<{ nombre: string, provincia: string }> = []; // Resultados filtrados
  
  selectedFiles: File[] = [];
  previewUrl: string = '';
  // Objeto para almacenar las características del hospedaje
  hospedaje: any = {  
    wifi: false,
    tv: false,
    garage: false,
    airConditioning: false,
    heating: false,
    pool: false
  };

  //Variables para mostrar mensajes de éxito o error
  showSuccess: boolean = false;
  showError: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  // Cálculo de posición del scroll
  viewportTop: number = 0;
  viewportRight: number = 0;

  constructor(
    private hospedajeService: HospedajeService,
    private imagesService: ImagesService,
    private authService: AuthService,
    private router: Router,
    private filtroService: FiltroService
  ) {
    window.addEventListener('scroll', this.updateViewportPosition.bind(this));  // Escuchar el scroll
  }

  updateViewportPosition() {
    this.viewportTop = window.pageYOffset || document.documentElement.scrollTop;
    this.viewportRight = window.innerWidth - 10; // Mantener el mensaje siempre a la derecha
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    // Mostrar previsualización de la primera imagen seleccionada
  if (this.selectedFiles.length > 0) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.previewUrl = e.target.result;
    };
    reader.readAsDataURL(this.selectedFiles[0]);
  } else {
    this.previewUrl = 'src/assets/images/hospedaje-pordefecto/hospedaje.png';  // Imagen por defecto si no se selecciona ninguna
  }
  }

  async onSubmit(nuevoHospedajeForm: NgForm) {
    if (nuevoHospedajeForm.invalid) {
      return;
    }

    // Subir las imágenes primero si las hay
    let uploadedImages: string[] = [];
    if (this.selectedFiles.length > 0) {
      for (let file of this.selectedFiles) {
        try {
          const downloadURL = await this.imagesService.uploadImage(file);  
          uploadedImages.push(downloadURL);  
        } catch (error) {
          this.showErrorMessage('Error al subir la imagen.');
        }
      }
    }

    // Crear objeto del hospedaje con los campos requeridos
    const hospedajeData = {
      name: nuevoHospedajeForm.value.name,
      capacity: nuevoHospedajeForm.value.capacity,
      description: nuevoHospedajeForm.value.description,
      price: nuevoHospedajeForm.value.price,
      locality: nuevoHospedajeForm.value.location,
      wifi: this.hospedaje.wifi,
      tv: this.hospedaje.tv,
      garage: this.hospedaje.garage,
      airConditioning: this.hospedaje.airConditioning,
      heating: this.hospedaje.heating,
      pool: this.hospedaje.pool,
      createdAd: new Date(),
      active: true,
      userToken: this.authService.getToken(),
      images: uploadedImages.map((imgUrl) => ({ imgUrlHospedajeImg: imgUrl }))  // Ajustar al formato esperado
    };
    console.log('Nombre del hospedaje:', nuevoHospedajeForm.value.nombreHospedaje);
    // Llamada al servicio para crear el hospedaje
    this.hospedajeService.createHospedaje(hospedajeData).subscribe({
      next: (response) => {        
        this.showSuccessMessage('Hospedaje creado exitosamente.');        
        setTimeout(() => this.router.navigate(['/perfil-usuario']), 3000);
      },
      error: (error) => {
        this.showErrorMessage('Hubo un error al crear el hospedaje.');
      }
    });
  }

  // Método para manejar la entrada de texto y autocompletar
  onUbicationInput() {
    if (this.ubicationQuery.length > 2) { // Solo buscar si hay más de 2 caracteres
      this.filtroService.getAutocompleteSuggestions(this.ubicationQuery).subscribe((locations) => {
        this.filteredLocations = locations; // Guardar resultados
      });
    } else {
      this.filteredLocations = []; // Limpiar si la consulta es corta
    }
  }

  // Método para seleccionar una ubicación del autocompletado
  selectLocation(location: { nombre: string, provincia: string }) {
    this.ubicationQuery = `${location.nombre}, ${location.provincia}`;
    this.filteredLocations = []; // Limpiar resultados después de seleccionar
  }

 // Mostrar mensaje de éxito en la posición visible del usuario
 showSuccessMessage(message: string) {
  this.successMessage = message;
  this.showSuccess = true;

  // Asignar el estilo dinámico basado en la posición de scroll del usuario
  const alertElement = document.querySelector('.alert') as HTMLElement;
  if (alertElement) {
    alertElement.style.top = `${this.viewportTop + 10}px`;  // Colocar mensaje 10px debajo de la posición de scroll
    alertElement.style.right = `${this.viewportRight}px`;    // Siempre pegado al borde derecho
  }

  setTimeout(() => this.showSuccess = false, 5000);
}

showErrorMessage(message: string) {
  this.errorMessage = message;
  this.showError = true;

  const alertElement = document.querySelector('.alert') as HTMLElement;
  if (alertElement) {
    alertElement.style.top = `${this.viewportTop + 10}px`;  // Colocar mensaje 10px debajo de la posición de scroll
    alertElement.style.right = `${this.viewportRight}px`;   // Siempre pegado al borde derecho
  }

  setTimeout(() => this.showError = false, 5000);
}

 

  // Método para cancelar la creación del hospedaje
  onCancel() {
    // Lógica para cancelar la operación, por ejemplo, redirigir a otra página o limpiar el formulario.
    console.log('Operación cancelada');
  }
}
