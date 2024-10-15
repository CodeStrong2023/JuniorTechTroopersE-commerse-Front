
//Modelo de datos para el perfil de usuario
export interface UserProfile {
  userName: string;  
  imgUrl: string;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string; 
  phone: string;
  ubication_x: string; // Cambiado de number a string
}
