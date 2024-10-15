import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-home',
  templateUrl: './button-home.component.html',
  styleUrl: './button-home.component.css'
})
export class ButtonHomeComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['']);  
  }
}
