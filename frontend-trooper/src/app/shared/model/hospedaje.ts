export interface Image {
  imgUrlHospedajeImg: string; 
}

export interface Hospedaje {
  nombreHospedaje: string; 
  capacity: number;
  description: string;
  price: number;
  locality: string;
  wifi: boolean;
  tv: boolean;
  garage: boolean;
  airconditioning: boolean; 
  heating: boolean;
  pool: boolean;
  images: Image[];
}
