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
  
  // Control para el spinner de carga
  isProfileLoading: boolean = true; // Para mostrar spinner mientras se carga el perfil
  isHospedajesLoading: boolean = true; // Para mostrar spinner mientras se cargan los alojamientos

  hospedajes: Hospedaje[] = [];  
  errorMessage: string = '';

  constructor(private authService: AuthService, private hospedajeService: HospedajeService) {}

  ngOnInit(): void {
    this.loadUserProfile();
    this.loadHospedajes();
  }

  // Cargar perfil de usuario
  loadUserProfile(): void {
    this.authService.getProfile().subscribe(
      (profile: UserProfile) => {
        this.userProfile = profile;
        this.isProfileLoading = false; // Detener la animación de carga para el perfil
      },
      (error) => {
        console.error('Error al cargar el perfil de usuario:', error);
        this.isProfileLoading = false; // Detener la animación aunque ocurra un error
      }
    );
  }

  // Cargar alojamientos
  loadHospedajes(): void {
    this.hospedajeService.getHospedajesByUser().subscribe({
      next: (data: Hospedaje[]) => {
        this.hospedajes = data;
        this.isHospedajesLoading = false; // Detener la animación de carga para los alojamientos
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar los hospedajes.';
        this.isHospedajesLoading = false; // Detener la animación aunque ocurra un error
      }
    });
  }

  // Función para obtener la URL de la imagen del hospedaje
  getImageUrl(hospedaje: Hospedaje): string {
    return hospedaje.images && hospedaje.images.length > 0
      ? hospedaje.images[0].imgUrl
      : 'assets/images/hospedaje-pordefecto/hospedaje.png'; // Imagen por defecto si no hay imágenes
  }
}
