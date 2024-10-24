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

 
}
