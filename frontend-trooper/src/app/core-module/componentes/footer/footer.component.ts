import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isTermsModalOpen: boolean = false;
  termsAccepted: boolean = false;

  // Método para abrir el modal de Términos y Condiciones
  openTermsModal() {
    this.isTermsModalOpen = true;
  }

  // Método para verificar si el checkbox de términos fue marcado
  onTermsChecked(event: any) {
    this.termsAccepted = event.target.checked;
  }

  // Método para aceptar los términos y cerrar el modal
  acceptTerms() {
    if (this.termsAccepted) {
      this.isTermsModalOpen = false;
      alert('Has aceptado los términos y condiciones.');
    }
  }
}
