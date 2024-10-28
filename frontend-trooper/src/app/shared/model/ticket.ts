//Modelo para el ticket de hospedaje que se genera al reservar un hospedaje
export interface Ticket {
  hospedajeToken: string;
  startDate: string;  // Formato de fecha como 'YYYY-MM-DD'
  endDate: string;    // Formato de fecha como 'YYYY-MM-DD'
}