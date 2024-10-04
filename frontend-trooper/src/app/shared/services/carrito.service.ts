import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  private hospedajes: any[] = [];

  agregarHospedaje(hospedaje: any) {
    this.hospedajes.push(hospedaje);
  }

  obtenerHospedajes() {
    return this.hospedajes;
  }

  eliminarHospedaje(index: number) {
    this.hospedajes.splice(index, 1);
  }
}
