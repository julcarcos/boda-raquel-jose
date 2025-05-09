import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() navigateToSection = new EventEmitter<number>(); // Emite el índice de la sección

  onNavigateToSection(index: number) {
    this.navigateToSection.emit(index); // Emitimos el índice de la sección
  }
}
