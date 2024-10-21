import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


//Declaramos un guard que se encargará de proteger las rutas que necesitemos
export const authGuard: CanActivateFn = (route, state) => {
  // Inyectamos los servicios necesarios (authService y router para redirigir al login si no está autenticado)
  const authService = inject(AuthService);
  const router = inject(Router);

  //Si el usuario está autenticado, permitimos el acceso a la ruta
  if (authService.isAuthenticated()) {
    return true;
    //Si no, redirigimos al login
  } else {
    router.navigate(['/login']); // Redirige al login si no está autenticado
    return false;
  }
};