import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
  successMessage: string = '';
  showSuccess: boolean = false; // Nueva variable para mostrar el mensaje de éxito

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''], // No obligatorio
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.http.post('https://formspree.io/f/mgvewapa', formData).subscribe(
        response => {
          this.successMessage = 'Mensaje enviado exitosamente';
          this.showSuccess = true; // Mostrar el mensaje de éxito

          setTimeout(() => {
            this.showSuccess = false; // Ocultar después de 3 segundos
            this.successMessage = '';
            this.router.navigate(['']);
          }, 3000);

          this.contactForm.reset(); // Reiniciar el formulario
        },
        error => {
          alert('Hubo un error al enviar el mensaje');
        }
      );
    }
  }
}