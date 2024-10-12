export interface UserProfile {
    imgUrl: string;
    firstname: string;
    lastname: string;
    email: string;
    birthdate: Date;
    phone: string;
    ubication_x: number;
    ubication_y: number;
    createdAt: Date;
    error?: string;
  }