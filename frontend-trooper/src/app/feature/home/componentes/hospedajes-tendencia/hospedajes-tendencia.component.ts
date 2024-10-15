import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospedajes-tendencia',
  templateUrl: './hospedajes-tendencia.component.html',
  styleUrl: './hospedajes-tendencia.component.css'
})
export class HospedajesTendenciaComponent implements OnInit {
  
  hospedajes = [
    {
      titulo: 'Cabaña Montaña Verde',
      descripcion: 'San Rafael | Disfruta de vistas panorámicas a la montaña desde nuestra encantadora cabaña.',
      imagenUrl: '../../../../../assets/images/tendencias/cabania.jpg',
      url: '/detalles/cabana-montana-verde'
    },
    {
      titulo: 'Cabaña Montaña Verde',
      descripcion: 'San Rafael | Disfruta de vistas panorámicas a la montaña desde nuestra encantadora cabaña.',
      imagenUrl: '../../../../../assets/images/tendencias/cabania.jpg',
      url: '/detalles/cabana-montana-verde'
    },
    {
      titulo: 'Cabaña Montaña Verde',
      descripcion: 'San Rafael | Disfruta de vistas panorámicas a la montaña desde nuestra encantadora cabaña.',
      imagenUrl: '../../../../../assets/images/tendencias/cabania.jpg',
      url: '/detalles/cabana-montana-verde'
    },
  ];

  constructor() { }

  ngOnInit(): void {}

  visitarHospedaje(url: string) {
    // Lógica para redirigir a la página de detalles
    console.log('Redirigiendo a:', url);
  }
}