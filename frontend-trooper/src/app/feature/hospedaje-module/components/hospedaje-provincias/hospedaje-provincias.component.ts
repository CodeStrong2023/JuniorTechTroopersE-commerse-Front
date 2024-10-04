import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospedaje-provincias',
  templateUrl: './hospedaje-provincias.component.html',
  styleUrls: ['./hospedaje-provincias.component.css']
})
export class HospedajeProvinciasComponent {

  constructor(private router: Router) { } 

  ngOnInit(): void {}

  info(){
    this.router.navigate(['/info']);
  }

  // Lista de cards con información para mostrar en el HTML
  cards = [
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg', // Ajusta la ruta a tus imágenes
      offer: '7 Nights for only $300',
      rating: 4
    },
    // Duplico la misma card para generar un total de 16
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: '../../../../../assets/images/hospedajes-provincias/ofertas-provincias.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    }
  ];

}
