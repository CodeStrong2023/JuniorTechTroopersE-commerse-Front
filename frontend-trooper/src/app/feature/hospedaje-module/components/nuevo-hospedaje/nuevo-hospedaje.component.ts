import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospedajeService } from '../../../../shared/services/hospedaje/hospedaje.service';

@Component({
  selector: 'app-nuevo-hospedaje',
  templateUrl: './nuevo-hospedaje.component.html',
  styleUrl: './nuevo-hospedaje.component.css'
})
export class NuevoHospedajeComponent {
  hospedajeForm: FormGroup;
  selectedImage: File | null = null;  // Almacena la imagen seleccionada

  constructor(
    private fb: FormBuilder,
    private hospedajeService: HospedajeService,
    private router: Router
  ) {
    // Crear el formulario con validaciones
    this.hospedajeForm = this.fb.group({
      name: ['', Validators.required],
      capacity: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      location: ['', Validators.required],
      services: this.fb.group({
        wifi: [false],
        tv: [false],
        garage: [false],
        air_conditioning: [false],
        heating: [false],
        pool: [false]
      }),
      image: [null, Validators.required]  // Campo para la imagen
    });
  }

  // Método para manejar el evento de cambio de imagen
  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;  // Asignar la imagen seleccionada
    }
  }

  // Método para manejar la creación del hospedaje
  createHospedaje(): void {
    if (this.hospedajeForm.invalid) {
      return;  // Si el formulario no es válido, no enviar
    }

    const formData = new FormData();
    formData.append('name', this.hospedajeForm.value.name);
    formData.append('capacity', this.hospedajeForm.value.capacity);
    formData.append('description', this.hospedajeForm.value.description);
    formData.append('price', this.hospedajeForm.value.price);
    formData.append('location', this.hospedajeForm.value.location);
    formData.append('services', JSON.stringify(this.hospedajeForm.value.services));

    if (this.selectedImage) {
      formData.append('image', this.selectedImage);  // Agregar la imagen seleccionada
    }

    // Llamar al servicio para crear el hospedaje
    this.hospedajeService.createHospedaje(formData).subscribe({
      next: () => {
        // Redirigir o mostrar un mensaje de éxito
        alert('Hospedaje creado con éxito');
        this.router.navigate(['/hospedajes']);  // Redirigir a la lista de hospedajes
      },
      error: (err) => {
        console.error('Error al crear el hospedaje:', err);
        alert('Error al crear el hospedaje');
      }
    });
  }
}
