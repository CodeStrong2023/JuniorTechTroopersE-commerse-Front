import { Component, OnInit } from '@angular/core';
import { Home } from '../../../../shared/model/home';
import { HomeService } from '../../../../shared/services/home/home.service';

@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.css'
})
export class TendenciasComponent implements OnInit {
  hospedajes: Home[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getHospedajes().subscribe((data: Home[]) => {
      this.hospedajes = data;
    });
  }
}
