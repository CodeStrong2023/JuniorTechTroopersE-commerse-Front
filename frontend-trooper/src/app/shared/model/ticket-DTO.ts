
//Modelo para traer la información de un ticket de usuarios que han alquilado un hospedaje
export interface TicketResponseDTO {
    nombreHospedaje: string;
    userNameRenter: string;
    emailRenter: string;
    phoneRenter: string;
    startDate: Date;
    endDate: Date;
    totalAmount: number;
  }