import { Component } from '@angular/core';

@Component({
  selector: 'app-hospedaje-provincias',
  templateUrl: './hospedaje-provincias.component.html',
  styleUrls: ['./hospedaje-provincias.component.css'] // Corrección: debe ser 'styleUrls' y no 'styleUrl'
})
export class HospedajeProvinciasComponent {

  // Lista de cards con información para mostrar en el HTML
  cards = [
    {
      title: 'Palm Resort',
      price: 150000,
      image: 'assets/images/card-image.jpg', // Ajusta la ruta a tus imágenes
      offer: '7 Nights for only $300',
      rating: 4 // Puedes agregar más propiedades como 'rating' o 'stars' si lo necesitas
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: 'assets/images/card-image.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: 'assets/images/card-image.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: 'assets/images/card-image.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: 'assets/images/card-image.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: 'assets/images/card-image.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: 'assets/images/card-image.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    },
    {
      title: 'Palm Resort',
      price: 150000,
      image: 'assets/images/card-image.jpg',
      offer: '7 Nights for only $300',
      rating: 4
    }
  ];

}
