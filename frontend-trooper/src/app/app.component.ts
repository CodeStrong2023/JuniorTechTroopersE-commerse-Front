import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-trooper';  

  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
