//Modelo de datos para el registro de un usuario
export interface RegisterUser {
  userName: string;
  password: string;
  imgUrl: string;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string; // Formato 'YYYY-MM-DD'
  phone: string;
  ubication_x: string; 
}
