import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from '../../../../shared/services/images-service/images.service';

@Component({
  selector: 'app-test-upload',
  templateUrl: './test-upload.component.html',
  styleUrl: './test-upload.component.css'
})
export class TestUploadComponent{
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  uploading: boolean = false;

  constructor(private router: Router) {}

  // Método para redirigir a la creación de hospedajes
  goToCreateHostel(): void {
    this.router.navigate(['/hospedaje/nuevo']);
  }
 
}
