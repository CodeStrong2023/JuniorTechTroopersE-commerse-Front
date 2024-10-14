import { Component } from '@angular/core';
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

  constructor(private uploadService: ImagesService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      this.uploading = true;
      this.uploadService.uploadImage(this.selectedFile)
        .then((url) => {
          this.imageUrl = url;
          this.uploading = false;
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
          this.uploading = false;
        });
    }
  }
}
