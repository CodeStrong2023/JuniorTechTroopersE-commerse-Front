export interface Image {
    imgUrl: string;
  }
  
  export interface Hospedaje {
    name: string;
    capacity: number;
    description: string;
    price: number;
    locality: string;
    wifi: boolean;
    tv: boolean;
    garage: boolean;
    airConditioning: boolean;
    heating: boolean;
    pool: boolean;
    images: Image[];
  }
  