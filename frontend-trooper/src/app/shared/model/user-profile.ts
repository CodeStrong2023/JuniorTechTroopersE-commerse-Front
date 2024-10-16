
//Modelo de datos para el perfil de usuario
export interface UserProfile {
  userName: string;  
  imgUrl: string;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string; 
  phone: string;
  locality: string; // Cambiado de number a string
}
