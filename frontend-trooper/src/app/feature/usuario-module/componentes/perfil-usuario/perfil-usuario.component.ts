import { Component, OnInit } from '@angular/core';
import { Hospedaje } from '../../../../shared/model/hospedaje';
import { UserProfile } from '../../../../shared/model/user-profile';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { HospedajeService } from '../../../../shared/services/hospedaje/hospedaje.service';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent implements OnInit {
  userProfile: UserProfile | null = null;
  isLoading: boolean = true; // Para mostrar un spinner mientras se carga la info


  hospedajes: Hospedaje[] = [];  
  errorMessage: string = '';
  constructor(private authService: AuthService, private hospedajeService: HospedajeService) {}

  ngOnInit(): void {
    this.loadUserProfile();

    this.hospedajeService.getHospedajesByUser().subscribe({
      next: (data: Hospedaje[]) => {
        this.hospedajes = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar los hospedajes.';
        this.isLoading = false;
      }
    });
  }

  loadUserProfile(): void {
    this.authService.getProfile().subscribe(
      (profile: UserProfile) => {
        this.userProfile = profile;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al cargar el perfil de usuario:', error);
        this.isLoading = false;
      }
    );
  }

  getImageUrl(hospedaje: Hospedaje): string {
    // Si el hospedaje tiene imágenes, devuelve la primera; si no, devuelve una imagen por defecto
    return hospedaje.images && hospedaje.images.length > 0
      ? hospedaje.images[0].imgUrlHospedajeImg
      : 'assets/images/hospedaje-pordefecto/hospedaje.png'; // Usa una imagen por defecto local
  }
}
