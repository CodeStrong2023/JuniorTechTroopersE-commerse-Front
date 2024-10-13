import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../../../shared/model/user-profile';
import { AuthService } from '../../../../shared/services/auth/auth.service';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent implements OnInit {
  userProfile: UserProfile | null = null;
  isLoading: boolean = true; // Para mostrar un spinner mientras se carga la info

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserProfile();
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
}
