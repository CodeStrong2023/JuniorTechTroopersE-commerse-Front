export interface Image {
  imgUrlHospedajeImg: string; // Ajustado para que coincida con el backend
}

export interface Hospedaje {
  nombreHospedaje: string; // Ajustado para que coincida con el backend
  capacity: number;
  description: string;
  price: number;
  locality: string;
  wifi: boolean;
  tv: boolean;
  garage: boolean;
  air_conditioning: boolean; // Ajustado para que coincida con el backend
  heating: boolean;
  pool: boolean;
  images: Image[];
}
